import "../App.css";
import { Form, Button } from "react-bootstrap";
import Logo from '../img/Icone.png';
import { useState } from "react";
import axios from "axios";
import { parseJwt } from '../Services/auth';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";



function Login() {
 const [email, setEmail] = useState('')
 const [senha, setSenha] = useState('')
 const [ValidarLoadiang, setValidarLoading] = useState(false);
 let history = useHistory();

 const notificacaoError = () =>{
  toast.error("Email ou Senha incorreta")   
}


 function Login(){
  axios.post('http://localhost:5000/api/Usuarios/Login/', {
    Email: email,
    Senha: senha
  })
  .then(response => {
    if(response.status === 200){
      localStorage.setItem('usuario-login', response.data.token)


      console.log('Meu token: ' + response.data.token)

      console.log(parseJwt())
      
      history.push('/home')
  
    }
  })
  .catch(error => {
    console.log(error)
    notificacaoError()
  })
 }


  return (
    <body>
      <div className="ctn">   
      <ToastContainer theme="dark"/>
            <div className="Card">
            <img src={Logo}></img>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control value={email} onChange={e => setEmail(e.target.value)} style={{borderColor: "#7fcff7"}} type="email" placeholder="email" />
                <Form.Text className="text-muted">
                  ex: joaozin@gmail.com
                </Form.Text>  
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label >Senha</Form.Label>
                <Form.Control value={senha} onChange={e => setSenha(e.target.value)} style={{borderColor: "#7fcff7"}}  type="password" placeholder="Senha" />
              </Form.Group>
              <Button onClick={Login} variant="primary" className="ButtonBlue">
                Entrar
              </Button>
            </Form>
            </div>


      </div>
    </body>
  );
}

export default Login;
