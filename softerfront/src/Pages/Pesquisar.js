import "../App.css";
import { Form, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import HeaderComponent from "../Components/headerComponent";
import FooterCompoment from "../Components/footerComponent";
import Table from "react-bootstrap/Table";
import Editar from "../img/edit.png";
import Excluir from "../img/trash-bin.png";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { parseJwt, usuarioAutenticado } from '../Services/auth';



let TokenValor = localStorage.getItem('usuario-login')


function Pesquisar() {

  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);
  const [Nome, setNome] = useState('');
  const [Nome2, setNome2] = useState('');
  const [NomePesquisa, setNomePesquisa] = useState('');
  const [Rg, setRg] = useState('');
  const [Rg2, setRg2] = useState('');
  const [Cpf2, setCpf2] = useState('');
  const [Cpf, setCpf] = useState('');
  const [Cep, setCep] = useState('');
  const [Endereco, setEndereco] = useState('');
  const [Numero, setNumero] = useState(0);
  const [Bairro, setBairro] = useState('');
  const [Complemento, setComplemento] = useState('');
  const [Complemento2, setComplemento2] = useState('');
  const [Municipio, setMunicipio] = useState('');
  const [Uf, setUf] = useState('');
  const [Cep2, setCep2] = useState('');
  

  const AbrirModal = () => setShow(true);
  const FecharModal = () => setShow(false);

  const notificacao = () =>{
     toast.success("Editado com sucesso")   
    FecharModal()
  }

  
const notificacaoExcluir = () =>{
  toast.success("Excluido com sucesso")   
  FecharModal()
}
const notificacaoError = () =>{
  toast.error("Cpf já cadastrado")   
  FecharModal()
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

  function MudarValorInput(event) {
    const { value  } = event.target

    if(value.charAt(0) === "0" || value.charAt(0) === "1" || value.charAt(0) === "2" || value.charAt(0) === "3" || value.charAt(0) === "4" || value.charAt(0) === "5" || value.charAt(0) === "6" || value.charAt(0) === "7" || value.charAt(0) === "8" || value.charAt(0) === "9"){
      setNomePesquisa(maskCpf(value))
    }else{
      setNomePesquisa(value)
    }
    

}
  
  function PesquisarUsuario(){
   

    let Primeirochar = NomePesquisa.charAt(0);

    if(Primeirochar === "0" || Primeirochar === "1" || Primeirochar === "2" || Primeirochar === "3" || Primeirochar === "4" || Primeirochar === "5" || Primeirochar === "6" || Primeirochar === "7" || Primeirochar === "8" || Primeirochar === "9"){

      axios.get(`http://localhost:5000/api/Pessoas/cpf/${NomePesquisa}`, {
        headers:{
            'Authorization': `Bearer  ${TokenValor}`
        }
    }).then(
        response =>{
          if(response.status === 200){
              console.log(response.data)
              setId(response.data.idPessoa)
              setNome(response.data.nome)
              setNome2(response.data.nome)
              setRg(response.data.rg)
              setRg2(response.data.rg)
              setCpf(response.data.cpf)
              setCpf2(response.data.cpf)
              setCep(response.data.cep)
              setCep2(response.data.cep)
              setEndereco(response.data.endereco)
              setNumero(response.data.numero)
              setBairro(response.data.bairro)
              setComplemento(response.data.complemento)
              setComplemento2(response.data.complemento)
              setMunicipio(response.data.municipio)
              setUf(response.data.uf)
          }
        
        }
      ).catch(error => {console.log(error)})
    }else{
      axios.get(`http://localhost:5000/api/Pessoas/nome/${NomePesquisa}`, {
        headers:{
            'Authorization': `Bearer  ${TokenValor}`
        }
    }).then(
        response =>{
          if(response.status === 200){
              console.log(response.data)
              setId(response.data.idPessoa)
              setNome(response.data.nome)
              setNome2(response.data.nome)
              setRg(response.data.rg)
              setRg2(response.data.rg)
              setCpf(response.data.cpf)
              setCpf2(response.data.cpf)
              setCep(response.data.cep)
              setCep2(response.data.cep)
              setEndereco(response.data.endereco)
              setNumero(response.data.numero)
              setBairro(response.data.bairro)
              setComplemento(response.data.complemento)
              setComplemento2(response.data.complemento)
              setMunicipio(response.data.municipio)
              setUf(response.data.uf)
          }
          
        }
      ).catch(error => console.log(error))
    }


  }

  function ExcluirUsuario(){
    axios.delete(`http://localhost:5000/api/Pessoas/${id}`, {
      headers:{
          'Authorization': `Bearer  ${TokenValor}`
      }
  })
    .then(
        response =>{
          console.log(response.data)
          setNome("")
          setNome2("")
          setRg("")
          setRg2("")
          setCpf("")
          setCpf2("")
          setCep("")
          setCep2("")
          setEndereco("")
          setNumero("")
          setBairro("")
          setComplemento("")
          setComplemento2("")
          setMunicipio("")
          setUf("")
          notificacaoExcluir()
        }
    ).catch(error => console.log(error))
  }

  function EditarUsuario(){
    axios.put(`http://localhost:5000/api/Pessoas/${id}`, {
      nome: Nome2,
      cpf: Cpf2,
      cep: Cep2,
      endereco: Endereco,
      numero: Numero,
      bairro: Bairro,
      complemento: Complemento2,
      municipio : Municipio,
      uf : Uf,
      rg : Rg2
    }, {
      headers:{
          'Authorization': `Bearer  ${TokenValor}`
      }
  }).then(
      response =>{
        if(response.status === 204){
            setNome(Nome2)
            setCpf(Cpf2)
            setCep(Cep2)
            setRg2(Rg2)
            notificacao()

        }
      }
    ).catch(error => 
      {
        console.log(error)
        notificacaoError()
      })
  }

  const maskCep = (v) => {
    v = v.replace(/\D/g, "")
  
    if (v.length <= 8) {
      v = v.replace(/(\d{5})(\d)/, "$1-$2")

    }
  
    return v
  }



  function MudarValorCep(event) {
    const { value } = event.target
  
    setCep2(maskCep(value))
  
  
    axios.get(`https://viacep.com.br/ws/${value}/json/`).then(response => {
  
      console.log(response.data.bairro)
      setBairro(response.data.bairro)
      setEndereco(response.data.logradouro)
      setMunicipio(response.data.localidade)
      setUf(response.data.uf)
    }
  
     
     )
     .catch(error => console.log(error))
  }
  





  return (
    <>
      <HeaderComponent />
      <body>
        {/*Modal Inicio*/}
        <Modal size="lg" show={show} onHide={FecharModal}>
          <Modal.Header closeButton>
            <Modal.Title>Editar uma pessoa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  style={{ borderColor: "#7fcff7" }}
                  type="email"
                  placeholder="Nome"
                  value={Nome2}
                  onChange={e => setNome2(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>CPF</Form.Label>
                <Form.Control
                  style={{ borderColor: "#7fcff7" }}
                  type="email"
                  placeholder="CPF"
                  value={Cpf2}
                  onChange={e => setCpf2(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>CEP</Form.Label>
                <Form.Control
                  style={{ borderColor: "#7fcff7" }}
                  type="email"
                  placeholder="CEP"
                  value={Cep2}
                  onChange={MudarValorCep}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Endereço</Form.Label>
                <Form.Control
                  style={{ borderColor: "#7fcff7" }}
                  type="email"
                  placeholder="Endereço"
                  value={Endereco}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Numero</Form.Label>
                <Form.Control
                  style={{ borderColor: "#7fcff7" }}
                  type="email"
                  placeholder="Numero"
                  value={Numero}
                  onChange={e => setNumero(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Bairro</Form.Label>
                <Form.Control
                  style={{ borderColor: "#7fcff7" }}
                  type="email"
                  placeholder="Bairro"
                  value={Bairro}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Complemento</Form.Label>
                <Form.Control
                  style={{ borderColor: "#7fcff7" }}
                  placeholder="Complemento"
                  value={Complemento2}
                  onChange={e => setComplemento2(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Municipio</Form.Label>
                <Form.Control
                  style={{ borderColor: "#7fcff7" }}
                  type="email"
                  placeholder="Municipio"
                  value={Municipio}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>UF</Form.Label>
                <Form.Control
                  style={{ borderColor: "#7fcff7" }}
                  type="email"
                  placeholder="UF"
                  value={Uf}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>RG</Form.Label>
                <Form.Control
                  style={{ borderColor: "#7fcff7" }}
                  type="email"
                  placeholder="RG"
                  value={Rg2}
                  onChange={e => setRg2(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={FecharModal}>
              Sair
            </Button>
            <Button
              variant="primary"
              className="ButtonBlue"
              onClick={EditarUsuario}
            >
              Editar pessoa
            </Button>
          </Modal.Footer>
        </Modal>
        {/*Modal Fim*/}
        <div className="ctn">
          <div className="Card3">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "4%",
                alignItems: "center",
              }}
            >
              <Link style={{ marginRight: "8%" }} to="/Home">
              <i
                className="fa fa-long-arrow-left fa-2x"
              ></i>
              </Link>

              <span style={{ marginRight: "1%" }} className="TitleCard">
                Pesquisar Nome ou Cpf 
              </span>
              <div style={{ marginLeft: "1%" }} className="input-icons">
                <i onClick={PesquisarUsuario} style={{cursor: "pointer"}} Class="fa fa-search"></i>
                <input
                  value={NomePesquisa }
                  onChange={MudarValorInput}
                  className="input-field form-control"
                  type="text"
                  placeholder="Pesquisar..."
                />
              </div>
            </div>

            <Table
              striped
              bordered
              hover
              variant="dark"
              style={{ marginTop: "10%" }}
              className="text-center"
            >
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Rg</th>
                  <th>CPF</th>
                  <th>CEP</th>
                  <th>Editar</th>
                  <th>Excluir</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Nome}</td>
                  <td>{Rg}</td>
                  <td>{Cpf}</td>
                  <td>{Cep}</td>
                  <td>
                    <img
                      className="Icons-Size"
                      src={Editar}
                      onClick={AbrirModal}
                    />
                  </td>
                  <td>
                    <img className="Icons-Size" src={Excluir} onClick={ExcluirUsuario}/>
                    <ToastContainer theme="dark"/>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </body>

      {
        parseJwt().role === "True" && <FooterCompoment /> 

      }

    </>
  );
}

export default Pesquisar;
