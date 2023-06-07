import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Ideology() {
  return (
   
    <MDBContainer
      fluid
      className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded mt-5"
      style={{
        
      }}
    >
       <h1 className="text-success" style={{textAlign:'center'}}>Our Ideology</h1>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10">
          <MDBCard className=" text-light bg-success bg-opacity-10">
            <MDBCardBody className="m-3">
              <MDBRow>
                <MDBCol
                  lg="4"
                  className="d-flex justify-content-center align-items-center mb-4 mb-lg-0"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                    className="rounded-circle img-fluid shadow-1"
                    alt="woman avatar"
                    width="200"
                    height="200"
                  />
                </MDBCol>
                <MDBCol lg="8">
                  {" "}
                  <p className=" fw-bold mb-4 text-success">
                   
"As the CEO of our innovative ecommerce platform, our mission is to empower businesses 
and entrepreneurs to thrive in the digital marketplace. 
We believe in providing a seamless and immersive shopping experience, connecting buyers and sellers from around the world. With cutting-edge technology, robust features, and unwavering commitment to customer satisfaction, we are revolutionizing the way people discover, shop, and engage online. Join us on this transformative
 journey and unlock unlimited possibilities for growth and success."
                  </p>
                  <p className="fw-bold text-muted lead mb-2">
                    <strong>Afraz Ahmed</strong>
                  </p>
                  <p className="fw-bold text-muted mb-0">CEO Shopistan</p>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}