import "../App.css";
import { Form, Button } from "react-bootstrap";
import Logo from '../img/Icone.png';
import { Link } from "react-router-dom";



function HeaderComponent() {

  const RemoverAuth = () =>{
    localStorage.removeItem('usuario-login')
    console.log("Removendo item")
  }




  return (
      <header className="div-header">   
      <div> 
            <img className="Header-Logo" src={Logo} />
            <Link onClick={RemoverAuth}  to="/Login"><h5 className="Header-Logout" >Sair</h5></Link>
      </div>

      </header>
  );
}

export default HeaderComponent;
