import React, { useState } from "react";

import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function Navbar() {
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
                <MDBNavbarLink   aria-current="page" href="#" >
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem text="light" tag='h5' className="ms-3">
                <MDBNavbarLink href="#">Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem tag='h5' text="light" className="ms-3">
                <MDBNavbarLink href="#">Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem tag='h5' text="light" className="ms-3">
                <MDBNavbarLink href="#">About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
