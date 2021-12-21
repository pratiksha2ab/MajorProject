# in charge of connecting views to Url

from django.urls import path
from base.views import product_views as views


urlpatterns = [
    path('', views.getProducts, name="products"),

    path('create/', views.createProduct, name="product-create"),
    path('upload/', views.uploadImage, name="image-upload"),

    path('<str:pk>/reviews/', views.createProductReview, name="create-review"),
    path('top/', views.topProduct, name="top-product"),
    path('recommend/', views.recommendProduct, name="recommend-product"),
    path('recommendPearson/', views.recommendProductPearson,
         name="recommendpearson-product"),
    path('<str:pk>/verifyPayment/', views.verify_payment, name="verify"),
    
    path('<str:pk>/', views.getProduct, name="product"),
    path('delete/<str:pk>/', views.deleteProduct, name="product-delete"),
    path('update/<str:pk>/', views.updateProduct, name="product-update"),

]
