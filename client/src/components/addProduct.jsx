import React, { useState } from 'react';
import { MDBInput, MDBBtn, MDBContainer } from 'mdb-react-ui-kit';

const AddProduct = () => {

   
        
  const [sellerId, setSellerId] = useState('');
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
    event.preventDefault();
    
    const formData = new FormData();
        formData.append('sellerId', sellerId);
        formData.append('ProductName', productName);
        formData.append('ProductType', productType);
        formData.append('ProductDescription', productDescription);
        formData.append('ProductPrice', productPrice);
        formData.append('Discount', discount);
        // formData.append('image', productImage);
        formData.append('ProductQuantity', productQuantity);
       
        try {
          const response = await fetch('http://localhost:3001/Shopistan/uploadProduct', {
            headers: {
                'Content-Type': 'multipart/form-data', // Set the Content-Type header
              },
            method: 'POST',
            body: JSON.stringify(formData)
          });
      
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
          }
      
          const responseData = await response.json();
          // Handle the response data as needed
          console.log(responseData);
        } catch (error) {
          // Handle any errors that occurred during the request
          console.error(error);
        }
  };

  return (
    <MDBContainer>
      <form onSubmit={handleSubmit}>
      <MDBInput
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
            <option value="">Electronic</option>
            <option value="Type 1">Home accessories</option>
            <option value="Type 2">Ear Buds</option>
            <option value="Type 3">Kids Wear</option>
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
