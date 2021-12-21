from django.shortcuts import render

# from rest_framework import serializers
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework import serializers
from rest_framework import status

import pandas as pd
import pickle
import requests
from datetime import datetime

from base.models import Product, Review
from base.serializers import ProductSerializer 
from base.models import  Order



@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('keyword')
    if query == None:
        query = ''
    products = Product.objects.filter(name__icontains=query)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
    # product = None
    # for i in products:
    #     if i['_id'] == pk:
    #         product = i
    #         break

    product = Product.objects.get(_id=pk)
    # euta matra item return garne so false
    serializer = ProductSerializer(product, many=False)

    return Response(serializer.data)


@api_view(['GET'])
def topProduct(request):
    products = Product.objects.filter(rating__gte=3).order_by('-rating')[0:3]
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


def recommend_here(product_name):
    with open("ml_model/model3000.sav", "rb") as f:
        model = pickle.load(f)
    new_df = pd.read_csv("ml_model/new_data3000.csv")
    movie_index = new_df[new_df['title'] == product_name].index[0]
    # print(movie_index)
    distances = model[movie_index]
    movies_list = sorted(list(enumerate(distances)),
                         reverse=True, key=lambda x: x[1])[1:4]
    # print(movies_list)
    recommend_list = []
    for i in movies_list:
        recommend_list.append(new_df.iloc[i[0]].title)
    # print(recommend_list)
    return recommend_list


@api_view(['POST'])
def recommendProduct(request):
    # products = Product.objects.filter(rating__gte=2).order_by('-rating')[0:3]
    # serializer = ProductSerializer(products, many=True)
    # return Response(serializer.data)
    product_name = request.data.get('name')
    result = recommend_here(product_name)

    products_all = Product.objects.filter(name__in=result)
    serializer = ProductSerializer(products_all, many=True)
    # print(serializer.data)
    return Response(serializer.data)


@api_view(['POST'])
def recommendProductPearson(request):
    print(request)
    product_name = request.data.get('name').strip()
    print("------------", product_name)
    with open("ml_model/model_pcorr3000.sav", "rb") as f:
        model = pickle.load(f)
    recommended_result = model.recommend(product_name)
    name_list= [i[0] for i in recommended_result]
    products = Product.objects.filter(name__in =name_list)
    serializer = ProductSerializer(products, many=True)
    # print(serializer.data)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request):
    user = request.user
    product = Product.objects.create(
        user=user,
        name="sample name",
        price=0,
        brand="sample brand",
        countInStock=0,
        category="Sample Category",
        description=''
    )
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateProduct(request, pk):
    data = request.data
    product = Product.objects.get(_id=pk)

    product.name = data['name']
    product.price = data['price']
    product.brand = data['brand']
    product.countInStock = data['countInStock']
    product.category = data['category']
    product.description = data['description']

    product.save()
    serializer = ProductSerializer(product, many=False)

    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request, pk):
    product = Product.objects.get(_id=pk)
    product.delete()
    return Response('Product Deleted')


@api_view(['POST'])
def uploadImage(request):
    data = request.data
    product_id = data['product_id']
    product = Product.objects.get(_id=product_id)
    product.image = request.FILES.get('image')
    product.save()
    return Response('Image was uploaded')


@api_view(['POST'])
def verify_payment(request,pk):    
    
    data = request.data
    print(data)
    token=data['token']
    amount=data['amount']
    url = "https://khalti.com/api/v2/payment/verify/"
    payload = {
        "token": token,
        "amount": amount
        }
    headers= { 
         "Authorization": "Key test_secret_key_e4032561f1794e058d807155759ce6c3" 
         }
    response = requests.post(url, payload, headers = headers)
    r=response.json()
    print(r)


    if response.status_code == 200:
        order = Order.objects.get(_id=pk)
        order.isPaid = True
        order.paidAt = datetime.now()
        order.save()
        msg = {"message": "success"}
        return Response(msg) 


    msg = {"message": "error"}
    return Response(msg)
    
     

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProductReview(request, pk):

    user = request.user
    product = Product.objects.get(_id=pk)
    data = request.data

    # 1 review pahele nai lekhesakeko xa
    review_garesakyo = product.review_set.filter(user=user).exists()

    if review_garesakyo:
        content = {'detail': 'Product review garisakyou'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # 2 incase customer le rating bina review submit garyo
    elif data['rating'] == 0:
        content = {'detail': 'Please select a rating'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)
    # 3 sabai thik xa vane review logic ya xa
    else:
        review = Review.objects.create(
            user=user,
            product=product,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )

        reviews = product.review_set.all()
        product.numReviews = len(reviews)

        total = 0
        for i in reviews:
            total += i.rating

        product.rating = total / len(reviews)
        product.save()

        return Response('Review Added')
