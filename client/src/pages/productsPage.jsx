import ViewProducts from "../components/productsPage";
import Footer from "../components/footer";
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