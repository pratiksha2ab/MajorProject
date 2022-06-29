import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productPearsonRecommendation = useSelector(
    (state) => state.productPearsonRecommendation
  );
  const { error, loading, products } = productPearsonRecommendation;

  // const checkproduct = () => {
  //   if(products ===[]){}
  // };
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              {" "}
              <i className="fas fa-laptop-code"></i> DealNepal
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <SearchBox />
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              {/* {products ? (
                <LinkContainer to="/recommendation">
                  <Nav.Link>My Recommendations</Nav.Link>
                </LinkContainer>
              ) : (
                <LinkContainer to="/">
                  <Nav.Link>My Recommendations</Nav.Link>
                </LinkContainer>
              )} */}
              {/* {userInfo ? (
                <LinkContainer to="/">
                  <Nav.Link>My Recommendations</Nav.Link>
                </LinkContainer>
              ) : (
                <LinkContainer to="/recommendation">
                  <Nav.Link>My Recommendations</Nav.Link>
                </LinkContainer>
              )} */}
              {/* <LinkContainer to="/recommendation">  //recommendation dekhdena aba uncomment later
                <Nav.Link>My Recommendations</Nav.Link>
              </LinkContainer> */}

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  {/* <LinkContainer to="/"> */}
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>
                    <Link style={{ textDecoration: "none" }} to="/">
                      Log Out
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Login
                  </Nav.Link>
                </LinkContainer>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
