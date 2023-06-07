import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import './login.css'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className='' style={{ marginTop: "40px" }}>
    <MDBContainer  fluid className="p-3 my-5 w-50 bg-success bg-opacity-10" style={{ height: "700px", width:"60%",borderRadius: "25px" }}> 

      <MDBRow>

        <MDBCol col='10' md='6' className='mt-5'>
          <img  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid mt-5" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6' className='mt-5'>


          <MDBInput className='bg-light bg-outline-success' wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput className='bg-light bg-outline-success' wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a className='text-success' href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-50 bg-success" size="lg">Sign in</MDBBtn>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <MDBBtn className="mb-4 w-100 " size="lg" style={{backgroundColor: '#3b5998'}}>
          <Link className='text-white' to ="/dashboard"> 
          <MDBIcon fab icon="facebook-f" className="mx-2 text-white"/>
           Continue with facebook
           </Link>
          </MDBBtn>

          <MDBBtn className="mb-4 w-100 text-danger " size="lg" style={{backgroundColor: '#FFCA28'}}>
            <MDBIcon fab icon="google" className="mx-2 text-success"/>
            Continue with Gmail
          </MDBBtn>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
  );
}

export default Login;