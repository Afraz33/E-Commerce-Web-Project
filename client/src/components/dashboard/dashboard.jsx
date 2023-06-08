import React from 'react';
import axios from 'axios'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBBtn,
  MDBModalDialog,
  MDBModalContent,
  MDBModalTitle,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCardTitle,
} from 'mdb-react-ui-kit';
import './dashboard.css';
import { useState } from 'react';

export default function PersonalProfile() {
  const [basicModal, setBasicModal] = useState(false);
  const [name, setName] = useState(localStorage.getItem('sellerName'));
  const [email, setEmail] = useState(localStorage.getItem('sellerEmail'));
  const [phone, setPhone] = useState(localStorage.getItem('sellerPhone'));
  const [city, setCity] = useState(localStorage.getItem('sellerCity'));
  const [province, setProvince] = useState(localStorage.getItem('sellerProvince'));
  const [address, setAddress] = useState(localStorage.getItem('sellerAddress'));
  const [password, setPassword] = useState(localStorage.getItem(''));

  const toggleShow = () => {
    setBasicModal(!basicModal);
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem("token")
    try {
      const sellerId = localStorage.getItem('sellerId');
      const updatedSeller = {
        name,
        email,
        password,
        contact: phone,
        city,
        province,
        address,
      };
  
      const response = await axios.put(`http://localhost:3001/Shopistan/updateSeller/${sellerId}`, updatedSeller,{
       
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
      if (response.status === 200) {
        console.log('Profile updated successfully');
       
        localStorage.setItem("sellerName",name)
        
        localStorage.setItem("sellerEmail",email)
        localStorage.setItem("sellerPhone", phone)
        localStorage.setItem("sellerAddress", address)
        localStorage.setItem("sellerCity", city)
        localStorage.setItem("sellerProvince", province)
        setBasicModal(false);
      
      } else {
        console.log('Update failed');
        // Handle failure, e.g., show an error message
      }
    } catch (error) {
      console.error('Update failed:', error.message);
      // Handle error, e.g., show an error message
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'province':
        setProvince(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  
  return (
    <section style={{ height: '600px' }}>
      <MDBContainer className="py-5 h-500" style={{ height: '400px' }}>
        <MDBRow className="justify-content-center align-items-center h-200">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
            ...
              <MDBRow className="g-0 bg-success bg-opacity-10">
                <MDBCol
                  md="4"
                  className="bg-success text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar"
                    className="my-5"
                    style={{ width: '80px' }}
                    fluid
                  />
                  <MDBTypography tag="h5">{name}</MDBTypography>
                  <MDBCardText>Web Designer</MDBCardText>
                  <MDBRow>
                    <MDBCol>
                      <MDBCardText>
                        Edit Profile <MDBIcon onClick={toggleShow} far icon="edit mb-5" />
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">{phone}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Residence</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">City</MDBTypography>
                        <MDBCardText className="text-muted">{city}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Province</MDBTypography>
                        <MDBCardText className="text-muted">{province}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-1">
                      <hr className="mt-0 mb-4" />
                      <MDBCol size="6" className="mb-3 ms-5">
                        <MDBTypography tag="h6">Address</MDBTypography>
                        <MDBCardText className="text-muted">{address}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-start">
                      <a href="#!">
                        <MDBIcon fab icon="facebook me-3" size="lg" />
                      </a>
                      <a href="#!">
                        <MDBIcon fab icon="twitter me-3" size="lg" />
                      </a>
                      <a href="#!">
                        <MDBIcon fab icon="instagram me-3" size="lg" />
                      </a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBModal show={basicModal} toggle={toggleShow} tabIndex="-1">
  <MDBModalDialog>
    <MDBModalContent>
      <MDBModalHeader toggle={toggleShow}>
        <MDBModalTitle>Update Profile Info</MDBModalTitle>
      </MDBModalHeader>
      <MDBModalBody>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="province">Province</label>
            <input
              type="text"
              className="form-control"
              id="province"
              name="province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="secondary" onClick={toggleShow}>
          Close
        </MDBBtn>
        <MDBBtn onClick={handleUpdate}>Update</MDBBtn>
      </MDBModalFooter>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>
</MDBContainer>
</section>
  )};