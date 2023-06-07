import { Route, Routes, Link, Router } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import Dashboard from "../pages/sellerDashboard";
import ViewProducts from "../pages/productsPage";
export default function Routing() {
    return(
   
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}> </Route>
        <Route path="/viewProducts" element={<ViewProducts />}></Route>
      </Routes>  
      
    )
}