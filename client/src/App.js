import logo from './logo.svg';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import Login from './components/login/login';
import LandingPage from './pages/Landing Page/landingPage';
import Routing from './routes/routes';
function App() {

 
  return (
    <div className="App">
    <Routing/>
      <LandingPage/>
    </div>
  );
}

export default App;
