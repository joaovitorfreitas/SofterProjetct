import "../App.css";
import { Form, Button } from "react-bootstrap";
import Logo from '../img/Icone.png';
import { BrowserRouter as  Link } from "react-router-dom";



function HeaderComponent() {
  return (
      <header className="div-header">   
      <div>
            <img className="Header-Logo" src={Logo} />
            <Link  to="/Login"><h5 className="Header-Logout" >Sair</h5></Link>
      </div>

      </header>
  );
}

export default HeaderComponent;
