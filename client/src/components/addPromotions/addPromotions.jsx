import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import './addPromotions.css'
import  { useState, useEffect } from 'react';
import axios from 'axios';


export default function AddPromotions() {
  const [promotionDescription, setPromotionDescription] = useState('');
  const [promotionType, setPromotionType] = useState('');
  const [promotionCode, setPromotionCode] = useState('');
  const [promotionSellerId, setPromotionSellerId] = useState(localStorage.getItem("sellerId"));

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
      <div className="mx-auto  mt-5" style={{ maxWidth: '800px', height: '600px',backgroundColor: '#388E3C' }}>
        <MDBRow className="pt-3 mx-3">
          <MDBCol md="3">
            <div className="text-center" style={{ marginTop: '100px', marginLeft: '10px' }}>
              <MDBIcon fas icon="shipping-fast text-white" size="5x" />
              <MDBTypography tag="h1" className="text-white">Welcome</MDBTypography>
              <p className="white-text">Place promotions to reward your customers!</p>
            </div>
            <div className="text-center">
              <MDBBtn color="white" rounded className="back-button">Go back</MDBBtn>
            </div>
          </MDBCol>
          <MDBCol md="9" className="justify-content-center " style={{ marginTop: '100px' }}>
            <MDBCard className="card-custom pb-4">
              <MDBCardBody className="mt-0 mx-5">
                <div className="text-center mb-3 pb-2 mt-3">
                  <MDBTypography tag="h4" style={{ color: '#495057' }} >Promotion Details</MDBTypography>
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
                  disabled
                  value={promotionSellerId}
                  onChange={handlePromotionSellerIdChange} />
                    </MDBCol>
                  </MDBRow>
                

                  <div className="float-end">
                    <MDBBtn type='submit' rounded style={{backgroundColor: '#4CAF50'}}>Add Promotion</MDBBtn>
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