
import React from 'react';
import NavbarDashboard from '../components/navbar/navbarDashboard';
import Footer from "../components/footer";
import Tab from '../components/tab';
import PersonalProfile from '../components/dashboard/dashboard';
export default function Dashboard(){
  
  return (
   
      <>
        <NavbarDashboard />
         <h1 className='mt-5 text-success'>Welcome {localStorage.getItem("sellerName")}!</h1>
         <PersonalProfile />
        <Footer />
      </>
      
    
  );
};


