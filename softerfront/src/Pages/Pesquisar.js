import "../App.css";
import { Form, Button } from "react-bootstrap";
import Logo from '../img/Icone.png';
import HeaderComponent from "../Components/headerComponent";
import FooterCompoment from "../Components/footerComponent"
import Lupa from "../img/lupa.png"


function Pesquisar() {
  return (
    <>
    <HeaderComponent/>

    <body>
      <div className="ctn">   
        <div className="Card3">
            <div style={{display: "flex"}}>
                <span className="TitleCard">Pesquisar nome ou Cpf</span>
                <div className="input-icons">
                    <i Class="fa fa-search">
                    </i>
                    <input className="input-field" 
                       type="text" 
                       placeholder="Pesquisar..."/>
                </div>
           </div>
        </div>
      </div>
    </body>

    <FooterCompoment/>

    </>
  );
}

export default Pesquisar;
