import React from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/Shopistan/seller-login", {
        email,
        password,
      });
      if (response.status === 200) {
        // Navigate to /dashboard
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("sellerName", response.data.seller.name)
        localStorage.setItem("sellerId", response.data.seller.sellerId)
        localStorage.setItem("sellerEmail", response.data.seller.email)
        localStorage.setItem("sellerPhone", response.data.seller.contact)
        localStorage.setItem("sellerAddress", response.data.seller.address)
        localStorage.setItem("sellerCity", response.data.seller.city)
        localStorage.setItem("sellerProvince", response.data.seller.province)
        
      console.log(localStorage.getItem("sellerName"))
        
        navigate("/Profile");
      }
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };
  return (
    <div className="" style={{ marginTop: "40px" }}>
      <MDBContainer
        fluid
        className="p-3 my-5 w-50 bg-success bg-opacity-10"
        style={{ height: "700px", width: "60%", borderRadius: "25px" }}
      >
        <MDBRow>
          <MDBCol col="10" md="6" className="mt-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="img-fluid mt-5"
              alt="Phone image"
            />
          </MDBCol>

          <MDBCol col="4" md="6" className="mt-5">
            <MDBInput
              className="bg-light bg-outline-success"
              wrapperClass="mb-4"
              label="Email address"
              id="formControlLg"
              type="email"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              className="bg-light bg-outline-success"
              wrapperClass="mb-4"
              label="Password"
              id="formControlLg"
              type="password"
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a className="text-success" href="!#">
                Forgot password?
              </a>
            </div>

            <MDBBtn className="mb-4 w-50 bg-success" size="lg" onClick={handleLogin}>
              Sign in
            </MDBBtn>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">OR</p>
            </div>

            <MDBBtn
              className="mb-4 w-100 "
              size="lg"
              style={{ backgroundColor: "#3b5998" }}
            >
              <Link className="text-white" to="/dashboard">
                <MDBIcon fab icon="facebook-f" className="mx-2 text-white" />
                Continue with facebook
              </Link>
            </MDBBtn>

            <MDBBtn
              className="mb-4 w-100 text-danger "
              size="lg"
              style={{ backgroundColor: "#FFCA28" }}
            >
              <MDBIcon fab icon="google" className="mx-2 text-success" />
              Continue with Gmail
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Login;
