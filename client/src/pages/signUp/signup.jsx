import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer";
import React from "react";

import { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
  
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,

} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Signup() {
  const [topRightModal, setTopRightModal] = useState(false);

  const toggleShow = () => setTopRightModal(!topRightModal);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    contact: "",
    city: "",
    province: "",
    address: "",
  });
  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      contact: "",
      city: "",
      province: "",
      address: "",
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Convert the form data to JSON
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
    fetch("http://localhost:3001/Shopistan/seller-signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
      // name: formData.name,
      // email: formData.email,
      // password: formData.password,
      // contact: formData.contact,
      // city: formData.city,
      // province: formData.province,
      // address: formData.address,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
       clearForm();
       toggleShow();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: newValue }));
  };
  return (
    <div className="bg-success bg-opacity-10">
      <Navbar />
      <div className="" style={{ marginTop: "54px" }}>
        <MDBContainer
          fluid
          className="w-55 mb-4 "
          style={{ height: "700px", width: "60%" }}
        >
          <form onSubmit={handleSubmit}>
            <MDBCard
              className="text-black m-5 bg-outline-success"
              style={{ borderRadius: "25px", height: "100%" }}
            >
              <MDBCardBody>
                <MDBRow>
                  <MDBCol
                    md="10"
                    lg="6"
                    className="order-2 order-lg-1 d-flex flex-column align-items-center"
                  >
                    <h3 classNAme="fs-1 text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-success">
                      Sign up
                    </h3>

                    <div className="d-flex flex-row align-items-center mb-4 ">
                      <MDBIcon fas icon="user me-3" size="lg" />
                      <MDBInput
                        value={formData.name}
                        onChange={handleChange}
                        label="Your Name"
                        name="name"
                        id="form8"
                        type="text"
                        required
                        className="w-100"
                      />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="envelope me-3" size="lg" />
                      <MDBInput
                        value={formData.email}
                        onChange={handleChange}
                        label="Your Email"
                        name="email"
                        id="form7"
                        required
                        type="email"
                      />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="lock me-3" size="lg" />
                      <MDBInput
                        value={formData.password}
                        onChange={handleChange}
                        label="Password"
                        name="password"
                        id="form6"
                        required
                        type="password"
                      />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="key me-3" size="lg" />
                      <MDBInput
                        value={formData.repeatPassword}
                        onChange={handleChange}
                        label="Repeat your password"
                        name="repeatPassword"
                        id="form5"
                        required
                        type="password"
                      />
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="key me-3" size="lg" />
                      <MDBInput
                        value={formData.contact}
                        onChange={handleChange}
                        label="Contact"
                        name="contact"
                        id="form4"
                        required
                        type="tel"
                      />
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="key me-3" size="lg" />
                      <MDBInput
                        value={formData.city}
                        onChange={handleChange}
                        label="City"
                        name="city"
                        id="form3"
                        required
                        type="text"
                      />
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="key me-3" size="lg" />
                      <MDBInput
                        value={formData.province}
                        onChange={handleChange}
                        className=""
                        name="province"
                        label="Province"
                        id="form2"
                        required
                        type="text"
                      />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="key me-3" size="lg" />
                      <MDBInput
                        value={formData.address}
                        onChange={handleChange}
                        className=""
                        name="address"
                        label="address"
                        required
                        id="form1"
                        type="text"
                      />
                    </div>

                    <div className="mb-4">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        required
                        id="flexCheckDefault"
                        label="Subscribe to our newsletter"
                      />
                    </div>

                    <MDBBtn className="mb-4 bg-success" size="lg">
                      Register
                    </MDBBtn>
                    <MDBBtn color='success'><Link to="/login">Login</Link></MDBBtn>
                  </MDBCol>

                  <MDBCol
                    md="10"
                    lg="6"
                    className="order-1 order-lg-2 d-flex align-items-center"
                  >
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      fluid
                    />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </form>
        </MDBContainer>
      </div>
      <Footer />
     

      <MDBModal
        animationDirection='right'
        show={topRightModal}
        tabIndex='-1'
        setShow={setTopRightModal}
      >
        <MDBModalDialog position='top-right' side>
          <MDBModalContent>
            <MDBModalHeader className='bg-success text-white'>
              <MDBModalTitle>Thankyou for Registetring at Shopistan</MDBModalTitle>
              <MDBBtn
                color='none'
                className='btn-close btn-close-white'
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className='row'>
                <div className='col-3 text-center'>
                  <i className='fas fa-shopping-cart fa-4x text-success'></i>
                </div>

                <div className='col-9'>
                  <p>Shopistan is Paksitan's number one online shopping place</p>
                  <p>Login to list your products right now!.</p>
                </div>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='success'><Link to="/login">Login</Link></MDBBtn>
              <MDBBtn outline color='success' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}



export default Signup;
