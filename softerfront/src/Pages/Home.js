import "../App.css";
import { Form, Button } from "react-bootstrap";
import HeaderComponent from "../Components/headerComponent";
import FooterComponent from "../Components/footerComponent";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import LogoAtendimento3 from "../img/atendimentoaocliente3.png";
import LogoAtendimento2 from "../img/atendimentoaocliente2.png";

function Home() {
  return (
    <>
      <HeaderComponent />
      <body>
        <div className="ctn2">
          <Card className="Card2">
            <Card.Img
              className="logoCard mx-auto d-block"
              variant="top"
              src={LogoAtendimento2}
            />
            <Card.Body>
              <Card.Title className="d-flex justify-content-center TitleCard">
                Buscar Pessoa
              </Card.Title>
              <Card.Text
                className="d-flex justify-content-center"
                style={{
                  marginTop: "8%",
                  marginLeft: "9%",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Ao clickar neste card vamos fazer busca de uma pessoa cadastrada.
              </Card.Text>
            </Card.Body>
            <Card.Body className="Background-card"></Card.Body>
          </Card>

          <Card className="Card2">
            <Card.Img
              className="logoCard mx-auto d-block"
              variant="top"
              src={LogoAtendimento3}
            />
            <Card.Body>
              <Card.Title className="d-flex justify-content-center TitleCard">
                Cadastrar Pessoa
              </Card.Title>
              <Card.Text
                className="d-flex justify-content-center"
                style={{
                  marginTop: "8%",
                  marginLeft: "9%",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Ao Clickar neste card vamos Cadastrar uma nova pessoa.
              </Card.Text>
            </Card.Body>
            <Card.Body className="Background-card"></Card.Body>
          </Card>
        </div>
      </body>
      <FooterComponent/>
    </>
  );
}

export default Home;
