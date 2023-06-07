import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import './addPromotions.css'
import  { useState, useEffect } from 'react';
import axios from 'axios';


export default function AddPromotions() {
  const [promotionDescription, setPromotionDescription] = useState('');
  const [promotionType, setPromotionType] = useState('');
  const [promotionCode, setPromotionCode] = useState('');
  const [promotionSellerId, setPromotionSellerId] = useState('');

  const handlePromotionDescriptionChange = (e) => {
    setPromotionDescription(e.target.value);
  };

  const handlePromotionTypeChange = (e) => {
    setPromotionType(e.target.value);
  };

  const handlePromotionCodeChange = (e) => {
    setPromotionCode(e.target.value);
  };

  const handlePromotionSellerIdChange = (e) => {
    setPromotionSellerId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/Shopistan/create-promotion', {
        promotionDescription,
        promotionType,
        promotionCode,
        promotionSellerId,
      });
      console.log(response.data);
      // Reset the form fields
      setPromotionDescription('');
      setPromotionType('');
      setPromotionCode('');
      setPromotionSellerId('');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="mx-auto gradient-custom mt-5" style={{ maxWidth: '800px', height: '400px' }}>
        <MDBRow className="pt-3 mx-3">
          <MDBCol md="3">
            <div className="text-center" style={{ marginTop: '50px', marginLeft: '10px' }}>
              <MDBIcon fas icon="shipping-fast text-white" size="3x" />
              <MDBTypography tag="h3" className="text-white">Welcome</MDBTypography>
              <p className="white-text">You are 30 seconds away from compleating your order!</p>
            </div>
            <div className="text-center">
              <MDBBtn color="white" rounded className="back-button">Go back</MDBBtn>
            </div>
          </MDBCol>
          <MDBCol md="9" className="justify-content-center">
            <MDBCard className="card-custom pb-4">
              <MDBCardBody className="mt-0 mx-5">
                <div className="text-center mb-3 pb-2 mt-3">
                  <MDBTypography tag="h4" style={{ color: '#495057' }} >Delivery Details</MDBTypography>
                </div>

                <form className="mb-0" onSubmit={handleSubmit}>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput  label="Promotion Description"
                  type="text"
                  value={promotionDescription}
                  onChange={handlePromotionDescriptionChange} />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput  label="Promotion Code"
                  type="text"
                  value={promotionCode}
                  onChange={handlePromotionCodeChange} />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput  label="Promotion Type"
                  type="text"
                  value={promotionType}
                  onChange={handlePromotionTypeChange} />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput  label="Promotion Seller Id"
                  type="text"
                  value={promotionSellerId}
                  onChange={handlePromotionSellerIdChange} />
                    </MDBCol>
                  </MDBRow>
                

                  <div className="float-end">
                    <MDBBtn type='submit' rounded style={{backgroundColor: '#0062CC'}}>Add Promotion</MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}