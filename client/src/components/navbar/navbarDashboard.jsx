import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
  } from 'mdb-react-ui-kit';

export default function NavbarDashboard() {
  const [showNavColor, setShowNavColor] = useState(false);
 

  return (
    <>
   
      <MDBNavbar sticky  expand="lg" dark bgColor="success" style={{height:'80px'}}>
        <MDBContainer fluid >
          
          <MDBNavbarBrand href="#" style={{width:'60%',marginLeft:'80px', fontSize:'30px'}} >Shopistan</MDBNavbarBrand>
          
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className="me-auto mt-2 ms-4 mb-lg-0">
              <MDBNavbarItem className="active" text="light" tag='h5'>
                <Link to="/orders">
                <MDBNavbarLink   aria-current="page" href="#" >
                View Orders
                </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem text="light" tag='h5' className="ms-3">
              <MDBDropdown >
                <MDBDropdownToggle tag='a' className='nav-link ' role='button'>
                  Products
                </MDBDropdownToggle>
                <MDBDropdownMenu className="bg-success bg-opacity-75">
                  <Link to="/addProduct">
                  <MDBDropdownItem link>Add Product</MDBDropdownItem>
                    </Link>
                    <Link to="/viewProducts">
                  <MDBDropdownItem link>View Products</MDBDropdownItem>
                  </Link>
                </MDBDropdownMenu>
              </MDBDropdown>
              </MDBNavbarItem>
              
              <MDBNavbarItem text="light" tag='h5' className="ms-3">
              <MDBDropdown >
                <MDBDropdownToggle tag='a' className='nav-link ' role='button'>
                  Promotions
                </MDBDropdownToggle>
                <MDBDropdownMenu className="bg-success bg-opacity-75">
                <Link to="/addPromotion">
                  <MDBDropdownItem link>Add Promotions</MDBDropdownItem>
                  </Link>
                  <Link to="/promotions">
                  <MDBDropdownItem link>View Promotions</MDBDropdownItem>
                  </Link>
                </MDBDropdownMenu>
              </MDBDropdown>
            
              </MDBNavbarItem>
              <MDBNavbarItem tag='h5' text="light" className="ms-3">
                <Link to="/Profile">
                <MDBNavbarLink href="">Profile</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem outline color="light" className='' type='button'>
              <Link to="/logout">
              <MDBBtn outline color="light" className='mt-2 ms-3' type='button'>
               Logout
               </MDBBtn>
               </Link>
          </MDBNavbarItem>
        
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
