import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon,
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
import "./dashboard.css"
import { useState } from 'react';
export default function PersonalProfile() {
  const [basicModal, setBasicModal] = useState(false);
  const [name, setName] = useState(localStorage.getItem("sellerName"));
  const [email, setEmail] = useState(localStorage.getItem("sellerEmail"));
  const [phone, setPhone] = useState(localStorage.getItem("sellerPhone"));
  const [city, setCity] = useState(localStorage.getItem("sellerCity"));
  const [province, setProvince] = useState(localStorage.getItem("sellerProvince"));
  const [address, setAddress] = useState(localStorage.getItem("sellerAddress"));
  const [password, setPassword] = useState(localStorage.getItem(""));
  
 

  const toggleShow = ()=> {
    setBasicModal(!basicModal);
    }
    const handleUpdate = async () => {
      try {
        const sellerId = localStorage.getItem('sellerId');
        const updatedSeller = {
          name: localStorage.getItem('sellerName'),
          email: localStorage.getItem('sellerEmail'),
          password: '', // Provide updated password if needed
          contact: localStorage.getItem('sellerPhone'),
          city: localStorage.getItem('sellerCity'),
          province: localStorage.getItem('sellerProvince'),
          address: localStorage.getItem('sellerAddress')
        };
    
        const response = await fetch(`/api/sellers/${sellerId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedSeller)
        });
    
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.msg || 'Update failed');
        }
    
        // Handle successful update, e.g., show a success message or update the local data
        console.log('Profile updated successfully');
      } catch (error) {
        // Handle error, e.g., show an error message
        console.error('Update failed:', error.message);
      }
    };
  return (
    <section  style={{height:'600px'}}>
      <MDBContainer className="py-5 h-500"style={{height:'400px'}}>
        <MDBRow className="justify-content-center align-items-center h-200">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0 bg-success bg-opacity-10">
                <MDBCol md="4" className="bg-success text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">{localStorage.getItem("sellerName")}</MDBTypography>
                  <MDBCardText>Web Designer</MDBCardText>
                  <MDBRow>
                  <MDBCol><MDBCardText>Edit Profile <MDBIcon onClick ={toggleShow} far icon="edit mb-5" /></MDBCardText></MDBCol>
                    
                    
                  </MDBRow>
                 
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{localStorage.getItem("sellerEmail")}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">{localStorage.getItem("sellerPhone")}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Residence</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">City</MDBTypography>
                        <MDBCardText className="text-muted">{localStorage.getItem("sellerCity")}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Province</MDBTypography>
                        <MDBCardText className="text-muted">{localStorage.getItem("sellerProvince")}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-1">
                    <hr className="mt-0 mb-4" />
                    <MDBCol size="6" className="mb-3 ms-5">
                    
                        <MDBTypography tag="h6">Address</MDBTypography>
                        <MDBCardText className="text-muted">{localStorage.getItem("sellerAddress")}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Update Promotion</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <form>
    <div className="form-group">
      <label htmlFor="promotionDescription">Promotion Description</label>
      <input
        type="text"
        className="form-control"
        id="promotionDescription"
        name="promotionDescription"
        // value={selectedPromotion?.promotionDescription || ''}
  // onChange={handleInputChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="promotionType">Promotion Type</label>
      <input
        type="text"
        className="form-control"
        id="promotionType"
        name="promotionType"
        // value={selectedPromotion?.promotionType || ''}
  // onChange={handleInputChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="promotionCode">Promotion Code</label>
      <input
        disabled
        type="text"
        className="form-control"
        id="promotionCode"
        name="promotionCode"
        // value={selectedPromotion?.promotionCode || ''}
  // onChange={handleInputChange}
      />
    </div>
    
  </form>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn onClick={handleUpdate}>Update</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      </MDBContainer>
    </section>
  );
}