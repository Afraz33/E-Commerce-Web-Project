import React from 'react';
import { Route, Routes, Link } from "react-router-dom"
import Footer from './footer';
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBContainer
} from 'mdb-react-ui-kit';
function RegisterPage() {
    return (
      <div>
        <Footer />
      </div>
    );
  }

export default function Hero() {
  return (
    <>
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
    <header style={{ paddingLeft: 0}}>
      

      <div
        className='p-5 text-center bg-image'
        style={{  height: '300px', }}
      >
        <div className='mask '>
          <div className='d-flex justify-content-center  h-50 mt-5'>
            <div className='text-white mt-5'>
              <h1 className='mb-1 text-success'>Shopistan</h1>
              <h2 className='text-success'> Welcome to the Seller Module!</h2>
     
              <a className='btn bg-success btn-outline-light btn-lg mt-2' role='button'>
              <Link to="/register" className="text-light">Register Now!</Link>  
              </a>
              <br></br>
              <a style={{textDecoration:'underline'}} className='text-success' href='#' role='button'>Already a user? Log in!
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}