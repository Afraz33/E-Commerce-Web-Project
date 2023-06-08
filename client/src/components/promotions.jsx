import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBModalDialog,
  MDBModalContent,
  MDBModalTitle,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import axios from "axios";

const PromotionList = () => {
  const [basicModal, setBasicModal] = useState(false);
  const [selectedPromotion, setSelectedPromotion] = useState(null);
  const toggleShow = (promotion)=> {
     setBasicModal(!basicModal);
     setSelectedPromotion(promotion);}

  const [promotions, setPromotions] = useState([]);
  const [searchPromotionCode, setSearchPromotionCode] = useState("");

  const [currentPromotion, setCurrentPromotion] = useState({
    promotionDescription: "",
    promotionType: "",
    promotionCode: "",
    promotionSellerId: "",
  });

  useEffect(() => {
    getAllPromotions();
  }, []);

  const getAllPromotions = async () => {
    const token = localStorage.getItem("token")
    try {
      const response = await axios.get(
        `http://localhost:3001/Shopistan/getAllPromotions/${localStorage.getItem("sellerId")}`
        ,{
       
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      setPromotions(response.data.promotions);
    } catch (error) {
      console.error(error);
    }
  };

 

  const handleInputChange = (e) => {
    if (e.target.name === "promotionCode") {
      setSearchPromotionCode(e.target.value);
    } else {
      setSelectedPromotion({
        ...selectedPromotion,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleUpdate = async () => {
    console.log(selectedPromotion.promotionCode);
    const token = localStorage.getItem("token")
    try {
      await axios.put(
        `http://localhost:3001/Shopistan/updatePromotion/${selectedPromotion.promotionCode}`,
        selectedPromotion
        ,{
       
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      getAllPromotions();
      setBasicModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (promotionCode) => {
    const token = localStorage.getItem("token")
    try {
      await axios.delete(
        `http://localhost:3001/Shopistan/deletePromotion/${promotionCode}`
        ,{
       
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      getAllPromotions();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (e) => {
    const token = localStorage.getItem("token")
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3001/Shopistan/getPromotion/${localStorage.getItem("sellerId")}/${searchPromotionCode}`
        ,{
       
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
       setPromotions([response.data]);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MDBContainer className="h-100 mt-5">
      
      
      <form className="mt-5" onSubmit={handleSearch} style={{width:'40%'}}>
      <MDBRow>
        <MDBCol>
        <MDBInput
          label="Search Promotion"
          outline
          name="promotionCode"
          value={searchPromotionCode}
          onChange={handleInputChange}
        />
        </MDBCol>
        <MDBCol style={{width:'100px'}}>
        <MDBBtn color="primary" type="submit" >
          Search
        </MDBBtn>
        </MDBCol>
        </MDBRow>
      </form>
      
      
      <MDBTable hover responsive className="mt-5" style={{height:'400px'}}>
        <MDBTableHead>
          <tr>
            <th>Promotion Code</th>
            <th>Promotion Description</th>
            <th>Promotion Type</th>
            <th>Seller ID</th>
            <th>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {promotions.map((promotion) => (
            <tr key={promotion._id}>
              <td>{promotion.promotionCode}</td>
              <td>{promotion.promotionDescription}</td>
              <td>{promotion.promotionType}</td>
              <td>{promotion.promotionSellerId}</td>




<td>
 
  <MDBBtn color="danger" onClick={() => handleDelete(promotion.promotionCode)}>
    Delete
    
  </MDBBtn>
  {' '}
  <MDBBtn onClick={()=>toggleShow(promotion)}>Update</MDBBtn>
  
</td>
</tr>
))}
</MDBTableBody>
</MDBTable>

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
        value={selectedPromotion?.promotionDescription || ''}
  onChange={handleInputChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="promotionType">Promotion Type</label>
      <input
        type="text"
        className="form-control"
        id="promotionType"
        name="promotionType"
        value={selectedPromotion?.promotionType || ''}
  onChange={handleInputChange}
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
        value={selectedPromotion?.promotionCode || ''}
  onChange={handleInputChange}
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
);
};




export default PromotionList;
