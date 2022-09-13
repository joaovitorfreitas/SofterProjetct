import "../App.css";
import { Form, Button } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";
import atendimentocliente from '../img/atendimentoaocliente.png';
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

let TokenValor = localStorage.getItem('usuario-login')


function HeaderComponent() {


  const [show, setShow] = useState(false);

  const [Email, setEmail] = useState('')
  const [Senha, setSenha] = useState('')
  const [Adm, setAdm] = useState(false)

  const AbrirModal = () => setShow(true);
  const FecharModal = () =>{
    setShow(false)
    setEmail("")
    setSenha("")
    setAdm(false)
  }
  
  const notificacao = () =>{
    toast.success("Cadastrado com sucesso")   
    FecharModal()
  }

  const CadastrarUsuario = () => {
    axios.post("http://localhost:5000/api/Usuarios/", {
      Email: Email,
      Senha: Senha,
      Adm: Adm
    }, {
      headers:{
          'Authorization': `Bearer  ${TokenValor}`
      }
  }).then(
      response => {
        if(response.status === 201){
            notificacao()
        }
      }
    ).catch(error => console.log(error))
  }

  return (
      <footer className="div-footer">
      <ToastContainer theme="dark"/>
        {/*Card Inicio*/}
        <Modal size="lg" show={show} onHide={FecharModal}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastrar um usuário</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control value={Email} onChange={e => setEmail(e.target.value)} style={{borderColor: "#7fcff7"}} type="email"  placeholder="Email" />

              </Form.Group>
              <Form.Group  className="mb-3" controlId="formBasicEmail">
                <Form.Label >Senha</Form.Label>
                <Form.Control value={Senha} onChange={e => setSenha(e.target.value)} style={{borderColor: "#7fcff7"}} type="password"  placeholder="Senha" />

              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adm</Form.Label>
                <Form.Control as="select" onChange={e => setAdm(e.target.value)} style={{borderColor: "#7fcff7"}}  placeholder="Admin" >
                  <option value={false}>Não</option>
                  <option value={true}>Sim</option>
                </Form.Control>

              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={FecharModal}>
              Sair
            </Button>
            <Button variant="primary" onClick={CadastrarUsuario} className="ButtonBlue">
              Cadastrar usuário
            </Button>
          </Modal.Footer>
        </Modal>
        {/*Card Fim*/}


        <div  style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img className="logoCard2" src={atendimentocliente} />

          <div className="divspacingfooter">
            <h3 style={{color: "#1397D5"}}>Você é um administrador !</h3>
            <h3 style={{marginTop:"1%", color: "#1397D5"}}>Poderá cadastrar outro usuário</h3>
            <div style={{display: "flex", justifyContent: "center"}}>
            <Button variant="primary" onClick={AbrirModal}  className="ButtonBlue">
              Cadastrar Usuário
            </Button>
            </div>
            
          </div>
        </div>
      </footer>
  );
}

export default HeaderComponent;
