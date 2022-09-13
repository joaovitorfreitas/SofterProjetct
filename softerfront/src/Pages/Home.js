import "../App.css";
import { Form, Button } from "react-bootstrap";
import HeaderComponent from "../Components/headerComponent";
import FooterComponent from "../Components/footerComponent";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import LogoAtendimento3 from "../img/atendimentoaocliente3.png";
import LogoAtendimento2 from "../img/atendimentoaocliente2.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { parseJwt } from '../Services/auth';

let TokenValor = localStorage.getItem('usuario-login')


function Home() {
  const [show, setShow] = useState(false);
  const [Nome, setNome] = useState('')
  const [Endereco, setEndereco] = useState('')
  const [Numero, setNumero] = useState('')
  const [Bairro, setBairro] = useState('')
  const [Complemento, setComplemento] = useState('')
  const [Municipio, setMunicipio] = useState('')
  const [UF, setUF] = useState('')
  const [valorCpf, setValorCpf] = useState('')
  const [valorCEP, setValorCEP] = useState('')
  const [valorRG, setValorRG] = useState('')
  


  const AbrirModal = () => setShow(true);
  const FecharModal = () =>{
    setShow(false)
    setNome("")
    setEndereco("")
    setNumero("")
    setBairro("")
    setComplemento("")
    setMunicipio("")
    setUF("")
    setValorCpf("")
    setValorCEP("")
    setValorRG("")
  }


  const maskCpf = (v) => {
    v = v.replace(/\D/g, "")
  
    if (v.length <= 11) {
      v = v.replace(/(\d{3})(\d)/, "$1.$2")
      v = v.replace(/(\d{3})(\d)/, "$1.$2")
      v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    }
  
    return v
  }

  const maskCep = (v) => {
    v = v.replace(/\D/g, "")
  
    if (v.length <= 8) {
      v = v.replace(/(\d{5})(\d)/, "$1-$2")

    }
  
    return v
  }

  const maskRg = (v) => {
    v = v.replace(/\D/g, "")
  
    if (v.length <= 9) {
      v = v.replace(/(\d{2})(\d)/, "$1.$2")
      v = v.replace(/(\d{3})(\d)/, "$1.$2")
      v = v.replace(/(\d{3})(\d)/, "$1-$2")

    }
  
    return v
  }


function MudarValorCpf(event) {
    const { value } = event.target

    setValorCpf(maskCpf(value))
}

function MudarValorCep(event) {
  const { value } = event.target

  setValorCEP(maskCep(value))


  axios.get(`https://viacep.com.br/ws/${value}/json/`).then(response => {

    console.log(response.data.bairro)
    setBairro(response.data.bairro)
    setEndereco(response.data.logradouro)
    setMunicipio(response.data.localidade)
    setUF(response.data.uf)
  }

   
   )
   .catch(error => console.log(error))
}

function MudarValorRG(event) {
  const { value } = event.target

  setValorRG(maskRg(value))
}


const notificacao = () =>{
  toast.success("Cadastrado com sucesso")   
  FecharModal()
}

  function CadastrarPessoa()
  {
    console.log(Nome)
    console.log(valorCpf)
    console.log(valorCEP)
    console.log(Endereco)
    console.log(Bairro)
    console.log(Complemento)
    console.log(Municipio)
    console.log(UF)
    console.log(valorRG)

    axios.post("http://localhost:5000/api/Pessoas", {
      nome: Nome,
      cpf: valorCpf,
      cep: valorCEP,
      endereco: Endereco,
      numero: Numero,
      bairro: Bairro,
      complemento: Complemento,
      municipio: Municipio,
      uf: UF,
      rg: valorRG
    }, {
      headers:{
          'Authorization': `Bearer  ${TokenValor}`
      }
  }).then(
      response =>{
        if(response.status === 201){
          notificacao()

          setNome("")
          setEndereco("")
          setNumero("")
          setBairro("")
          setComplemento("")
          setMunicipio("")
          setUF("")
          setValorCpf("")
          setValorCEP("")
          setValorRG("")
        }else{
          console.log("dadaada")
        }
      }
    ).catch(Error => {
      console.log(Error)
      toast.error("Cpf já cadastrado")
    }
    
    )

  }

 

  return (
    <>
    
      <HeaderComponent />
      <body>
      <ToastContainer theme="dark"/>

        {/*Card Inicio*/}
        <Modal size="lg" show={show} onHide={FecharModal}>
          <Modal.Header closeButton>
            <Modal.Title>Cadastrar uma pessoa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome</Form.Label>
                <Form.Control  onChange={e => setNome(e.target.value)} value={Nome} style={{borderColor: "#7fcff7"}}  placeholder="Nome" />

              </Form.Group>
              <Form.Group  className="mb-3" controlId="formBasicEmail">
                <Form.Label >CPF</Form.Label>
                <Form.Control maxLength={14} onChange={MudarValorCpf} value={valorCpf} style={{borderColor: "#7fcff7"}} placeholder="CPF" />

              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>CEP</Form.Label>
                <Form.Control maxLength={9} onChange={MudarValorCep} value={valorCEP} style={{borderColor: "#7fcff7"}}  placeholder="CEP" />

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Endereço</Form.Label>
                <Form.Control  value={Endereco} style={{borderColor: "#7fcff7"}}  placeholder="Endereço" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Numero</Form.Label>
                <Form.Control  onChange={e => setNumero(e.target.value)} value={Numero} style={{borderColor: "#7fcff7"}}  placeholder="Numero" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Bairro</Form.Label>
                <Form.Control value={Bairro} style={{borderColor: "#7fcff7"}}  placeholder="Bairro" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Complemento</Form.Label>
                <Form.Control onChange={e => setComplemento(e.target.value)} value={Complemento} style={{borderColor: "#7fcff7"}}  placeholder="Complemento" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Municipio</Form.Label>
                <Form.Control value={Municipio} style={{borderColor: "#7fcff7"}}  placeholder="Municipio" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>UF</Form.Label>
                <Form.Control value={UF} maxLength={2} style={{borderColor: "#7fcff7"}}  placeholder="UF" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>RG</Form.Label>
                <Form.Control maxLength={12} onChange={MudarValorRG} value={valorRG} style={{borderColor: "#7fcff7"}}  placeholder="RG" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={FecharModal}>
              Sair
            </Button>
            <Button variant="primary" className="ButtonBlue" onClick={CadastrarPessoa}>
              Cadastrar pessoa
            </Button>
          </Modal.Footer>
        </Modal>
        {/*Card Fim*/}


        <div className="ctn2">

          <Link to="/Pesquisar" className="Card2">

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
                  color: "#212520"
                }}
              >
                Ao clickar neste card vamos fazer busca de uma pessoa
                cadastrada.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="Background-card2"></Card.Footer>
          </Link>

          <Card className="Card2" onClick={AbrirModal}>
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
            <Card.Footer className="Background-card"></Card.Footer>
          </Card>
        </div>

      </body>
      {
        parseJwt().role === "True" && <FooterComponent /> 

      }
    </>
  );
}

export default Home;
