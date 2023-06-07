import { Route, Routes, Link, Router } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import Dashboard from "../pages/sellerDashboard";
import ViewProducts from "../pages/productsPage";
import AddProductPage from "../pages/addProductPage";
import PromotionsPage from "../pages/promotionsPage";
import AddPromotionsPage from "../pages/addPromotionPage";
export default function Routing() {
    return(
   
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}> </Route>
        <Route path="/viewProducts" element={<ViewProducts />}></Route>
        <Route path="/addProduct" element={<AddProductPage />}></Route>
        <Route path="/promotions" element={<PromotionsPage />}></Route>
        <Route path="/addPromotion" element={<AddPromotionsPage />}></Route>
      </Routes>  
      
    )
}