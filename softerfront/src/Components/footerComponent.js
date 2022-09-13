import "../App.css";
import { Form, Button } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";
import atendimentocliente from '../img/atendimentoaocliente.png';

function HeaderComponent() {
  return (
      <footer className="div-footer">
        <div  style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img className="logoCard2" src={atendimentocliente} />

          <div className="divspacingfooter">
            <h3 style={{color: "#1397D5"}}>Você é um administrador !</h3>
            <h3 style={{marginTop:"1%", color: "#1397D5"}}>Poderá cadastra outro usuario</h3>
            <div style={{display: "flex", justifyContent: "center"}}>
            <Button variant="primary" type="submit" className="ButtonBlue">
              Cadastrar Usuário
            </Button>
            </div>
            
          </div>
        </div>
      </footer>
  );
}

export default HeaderComponent;
