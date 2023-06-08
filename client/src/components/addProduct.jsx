import React, { useState } from 'react';
import { MDBInput, MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import axios from 'axios';
const AddProduct = () => {

   
        
  const [sellerId, setSellerId] = useState(localStorage.getItem('sellerId') || '');
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [productQuantity, setProductQuantity] = useState('');

  const handleFileChange = (event) => {
    setProductImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    if (isNaN(productPrice) || isNaN(discount) || isNaN(productQuantity) || productPrice < 0 || discount < 0 || productQuantity < 0) {
      alert("Invalid Input")
      return;}
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', productImage);
    formData.append('sellerId', sellerId);
    formData.append('ProductName', productName);
    formData.append('ProductType', productType);
    formData.append('ProductDescription', productDescription);
    formData.append('ProductPrice', productPrice);
    formData.append('Discount', discount);
    formData.append('ProductQuantity', productQuantity);
console.log({productType});
    console.log(formData.get('image'));
    const token = localStorage.getItem("token")
    try{
      const response = await axios.post('http://localhost:3001/Shopistan/uploadProduct',formData,{
       
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
      console.log(response.data);
    }catch(error){
      console.log(error);

    }

  };

  return (
    <MDBContainer style={{marginTop:'60px', height:'100%'}}>
      <form className='bg-success bg-opacity-10' style={{borderColor:'green',width:'50%', margin:'auto',height:'70%'}} onSubmit={handleSubmit}>
      <MDBInput
      disabled
          label="Seller Id"
          type="text"
          value={sellerId}
          onChange={(e) => setSellerId(e.target.value)}
        />
        <MDBInput
          label="Product Name"
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <div className="form-group">
          <label>Product Type</label>
          <select
            className="form-control"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
          >
            <option value="">Types</option>
            <option value="Electronic">Electronic</option>
            <option value="Home accessories">Home accessories</option>
            <option value="Ear Buds">Ear Buds</option>
            <option value="Kids Wear">Kids Wear</option>
          </select>
        </div>
        <MDBInput
          label="Product Description"
          type="text"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <MDBInput
          label="Product Price"
          type="text"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <MDBInput
          label="Discount"
          type="text"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
        <div className="custom-file mb-4">
          <input type="file" className="custom-file-input" onChange={handleFileChange} />
          <label className="custom-file-label">Choose file</label>
        </div>
        <MDBInput
          label="Product Quantity"
          type="text"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
        />
        <MDBBtn className="bg-success" type="submit">Add Product</MDBBtn>
      </form>
    </MDBContainer>
  );
};

export default AddProduct;
