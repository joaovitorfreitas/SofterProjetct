import "../App.css";
import { Form, Button } from "react-bootstrap";
import Logo from '../img/Icone.png';


function Login() {
  return (
    <body>
      <div className="ctn">   
            <div className="Card">
            <img src={Logo}></img>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control style={{borderColor: "#7fcff7"}} type="email" placeholder="email" />
                <Form.Text className="text-muted">
                  ex: joaozin@gmail.com
                </Form.Text>  
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control style={{borderColor: "#7fcff7"}}  type="password" placeholder="Senha" />
              </Form.Group>
              <Button variant="primary" type="submit" className="ButtonBlue">
                Entrar
              </Button>
            </Form>
            </div>


      </div>
    </body>
  );
}

export default Login;
