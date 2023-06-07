import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import ViewProducts from "../components/productsPage";
import NavbarDashboard from "../components/navbar/navbarDashboard";

export default function ProductsPage() {
    return (
        <>
        <NavbarDashboard />
        <ViewProducts />
        <Footer />
        </>
    );
    }