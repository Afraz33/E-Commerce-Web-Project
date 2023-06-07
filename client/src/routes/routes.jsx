import { Route, Routes, Link, Router } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import Dashboard from "../pages/sellerDashboard";
export default function Routing() {
    return(
   
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}> </Route>
      </Routes>  
      
    )
}