import React, { useEffect, useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBRow, MDBCol,MDBRipple, MDBCardImage, MDBContainer} from 'mdb-react-ui-kit';
import axios from 'axios';
import ProductCard from './productsCard/productsCard';
function ViewProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend
    axios.get('http://localhost:3001/Shopistan/getAllProducts/4')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDelete = (productId) => {
    // Delete product using the backend API
    axios.delete(`http://localhost:3001/Shopistan/deleteProduct/${productId}`)
      .then(response => {
        console.log(response.data.message);
        // Refresh the product list after deletion
        setProducts(products.filter(product => product.ProductId !== productId));
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleUpdate = (productId) => {
    // Redirect to the update product page or show a modal for updating the product
    // Implement your update functionality here
    console.log(`Update product with ID: ${productId}`);
  };

  return (
    <MDBContainer  fluid className="my-5 text-center ">
      <h4 className="mt-4 mb-5">
        <strong className='text-success'>My Products</strong>
      </h4>
    <MDBRow  className='bg-success bg-opacity-10'>
      {products.map(product => (
          

         <MDBCol className='' md='4' key={product.ProductId}>
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                
                src={product.ProductImage}
                fluid
                className="w-40"
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      <span className="badge bg-success bg-opacity-50s ms-2">See Reviews</span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">{product.ProductName}</h5>
              </a>
              <a href="#!" className="text-reset">
                <p>{product.ProductType}</p>
              </a>
              <h6 className="mb-3">{product.ProductPrice}</h6>
              <MDBCardText>
                {product.ProductDescription}
              </MDBCardText>
              <MDBCardTitle><strong>Discount: </strong><>$</>{product.ProductQuantity}</MDBCardTitle>
              <MDBBtn onClick={() => handleDelete(product.ProductId)} color='danger'>Delete</MDBBtn>
              <MDBBtn onClick={() => handleUpdate(product.ProductId)} color='primary'>Update</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol> 
        
          
           /* <MDBCol md='4' key={product.ProductId}>
          <MDBCard className='mb-4'>
            <img src={product.ProductImage} className='card-img-top' alt='Product' />
            <MDBCardBody>
              <MDBCardTitle>{product.ProductName}</MDBCardTitle>
              <MDBCardText>
                Type: {product.ProductType}<br />
                Description: {product.ProductDescription}<br />
                Price: {product.ProductPrice}<br />
                Discount: {product.Discount}<br />
                Quantity: {product.ProductQuantity}
              </MDBCardText>
              <MDBBtn onClick={() => handleDelete(product.ProductId)} color='danger'>Delete</MDBBtn>
              <MDBBtn onClick={() => handleUpdate(product.ProductId)} color='primary'>Update</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>  */
      ))}
    </MDBRow>
    </MDBContainer>
  );
}

export default ViewProducts;
