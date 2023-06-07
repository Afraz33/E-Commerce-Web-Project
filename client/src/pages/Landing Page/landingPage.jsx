import Navbar from "../../components/navbar/navbar";
import Hero from '../../components/hero'
import React from 'react';
import Ideology from "../../components/ideology";
import Footer from "../../components/footer";
import Timeline from "../../components/timeline/timeline";
import { Route, Routes, Link } from "react-router-dom"
import Signup from "../signUp/signup";
function RegisterPage() {
    return (
      <div>
        <Signup />
      </div>
    );
  }

  
function HomePage() {
    return (
        <div className="App ">
     
        <Navbar />
        <Hero />
        <Ideology />
        <Timeline />
        <Footer />
  
        </div>
    );
}
export default function LandingPage() {
    return (
        <div className="App ">
     <Routes>
         <Route path="/register" element={<RegisterPage />} />
         <Route path="/" element={<HomePage />} />
    </Routes>
        </div>
    );
}