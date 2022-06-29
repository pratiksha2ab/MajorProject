import React from "react";
import "./Footer.css";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

function Footer() {
  return (
    <div className="footer">
      <a href="#">
        <button className="top">Back to top</button>
      </a>
      <MDBRow>
        <MDBCol md="6">
          <h5 className="title">DealNepal</h5>
          <p className="footer-intro">
            “DealNepal” is a full stack interactive B2C e-commerce providing
            users with a platform to buy and review the electronics related
            accessories online which will be built with reactjs for frontend,
            redux for state management, SQLite for database and DjangoREST
            framework for backend.
          </p>
        </MDBCol>
        <MDBCol md="3">
          <h5 className="title">Links</h5>
          <ul>
            <li className="list-unstyled">
              <i className="fab fa-facebook"></i>
              <a href="/"> facebook</a>
            </li>
            <li className="list-unstyled">
              <i className="fab fa-instagram"></i>
              <a href="/"> Instagram</a>
            </li>
            <li className="list-unstyled">
              <i className="fab fa-github"></i>
              <a href="/"> Github</a>
            </li>
            <li className="list-unstyled">
              <i className="fab fa-linkedin-in"></i>
              <a href="#!"> Linkedin</a>
            </li>
          </ul>
        </MDBCol>
        <MDBCol md="3">
          <h5 className="title">Have a qusetion?</h5>
          <ul>
            <li className="list-unstyled">
              {" "}
              <i className="fas fa-school"></i> Everest College,KTM
            </li>
            <li className="list-unstyled">
              <i className="fas fa-user"></i> +977 9813241542
            </li>
            <li className="list-unstyled">
              {" "}
              <i className="fas fa-envelope-open"></i> pratiksharegmi42@gmail.com
            </li>
          </ul>
        </MDBCol>
      </MDBRow>

      <div className="footer-copyright text-center py-3">
        <MDBContainer className="copyright" fluid>
          &copy; {new Date().getFullYear()} Copyright: DealNepal.
        </MDBContainer>
      </div>
    </div>
  );
}

export default Footer;
