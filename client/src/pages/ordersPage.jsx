import Orders from "../components/orders";
import Footer from "../components/footer";
import NavbarDashboard from "../components/navbar/navbarDashboard";


export default function OrdersPage() {
    return (
        <>
        <NavbarDashboard />
        <Orders />
        <Footer />
        </>
    );
    }