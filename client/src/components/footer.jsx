import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='success' className='text-center text-lg-start text-muted bg-opacity-10'>
      

      
              

      <div className='text-center p-4 bg-success text-light' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Shopistan.com
        </a>
      </div>
    </MDBFooter>
  );
}