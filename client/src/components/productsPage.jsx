import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBRipple,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
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
import ProductCard from "./productsCard/productsCard";

function ViewProducts() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = (promotion) => {
    setBasicModal(!basicModal);
    setSelectedProduct(promotion);
  };

  useEffect(() => {
    getAllProducts();}, []);
  
    // Fetch products from the backend
    const getAllProducts = async () => {
    axios
      .get(`http://localhost:3001/Shopistan/getAllProducts/${localStorage.getItem("sellerId")}`)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleInputChange = (e) => {
    setSelectedProduct({
      ...selectedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (productId) => {
    // Delete product using the backend API
    axios
      .delete(`http://localhost:3001/Shopistan/deleteProduct/${productId}`)
      .then((response) => {
        console.log(response.data.message);
        // Refresh the product list after deletion
        setProducts(
          products.filter((product) => product.ProductId !== productId)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdate = async () => {
   

    console.log(selectedProduct.ProductId);
    try {
      const updatedProduct = {
        ProductId: selectedProduct.ProductId,
        ProductName: selectedProduct.ProductName,
        ProductType: selectedProduct.ProductType,
        ProductPrice: selectedProduct.ProductPrice,
        ProductDescription: selectedProduct.ProductDescription,
        ProductImage: selectedProduct.ProductImage,
        ProductSellerId: selectedProduct.ProductSellerId
      };
      await axios.put(
        `http://localhost:3001/Shopistan/updateProduct/${selectedProduct.ProductId}`,
        updatedProduct
      );
      getAllProducts();
      setBasicModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MDBContainer fluid className="my-5 text-center ">
      <h4 className="mt-4 mb-5">
        <strong className="text-success">My Products</strong>
      </h4>
      <MDBRow className="bg-success bg-opacity-10">
        {products.map((product) => (
          <MDBCol className="" md="4" key={product.ProductId}>
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage
                  src={product.ProductImage}
                  fluid
                  className=" h-40"
                  style={{ height: "120px", width: "60%" }}
                />
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-success bg-opacity-50s ms-2">
                          See Reviews
                        </span>
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
                <MDBCardText>{product.ProductDescription}</MDBCardText>
                <MDBCardTitle>
                  <strong>Discount: </strong>
                  <>$</>
                  {product.ProductQuantity}
                </MDBCardTitle>
                <MDBBtn
                  onClick={() => handleDelete(product.ProductId)}
                  color="danger"
                >
                  Delete
                </MDBBtn>
                <MDBBtn onClick={() => toggleShow(product)}>Update</MDBBtn>
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
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Update Promotion</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form>
                <div className="form-group">
                  <label htmlFor="ProductType">Product Type</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ProductType"
                    name="ProductType"
                    value={selectedProduct?.ProductType || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="promotionDescription">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ProductName"
                    name="ProductName"
                    value={selectedProduct?.ProductName || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="promotionDescription">
                    Product Id
                  </label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    id="productId"
                    name="productId"
                    value={selectedProduct?.ProductId || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="promotionDescription">
                  ProductQuantity
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ProductQuantity"
                    name="ProductQuantity"
                    value={selectedProduct?.ProductQuantity || ""}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="promotionType">Product Price</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ProductPrice"
                    name="ProductPrice"
                    value={selectedProduct?.ProductPrice || ""}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="promotionCode">ProductDescription</label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    id="ProductDescription"
                    name="ProductDescription"
                    value={selectedProduct?.ProductDescription || ""}
                    onChange={handleInputChange}
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
  );
}

export default ViewProducts;
