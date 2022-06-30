using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Softer.Domains;
using Softer.Interfaces;
using Softer.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Softer.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class PessoasController : ControllerBase
    {
        private IPessoaRepository pessoaRepository { get; set; }

        public PessoasController()
        {
            pessoaRepository = new PessoaRepository();
        }

        [HttpGet("nome/{name}")]
        public IActionResult GetNome(string name)
        {
            try
            {
                return Ok(pessoaRepository.BuscarPessoa(name));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [HttpGet("cpf/{cpf}")]
        public IActionResult GetNomeCpf(string cpf)
        {
            try
            {
                return Ok(pessoaRepository.BuscarPessoaCpf(cpf));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetNome1(string id)
        {
            try
            {
                return Ok(pessoaRepository.BuscarPessoa(id));
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            try
            {
                pessoaRepository.Deletar(id);

                return StatusCode(204);

            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }

        }

        [HttpPost]
        public IActionResult CreateUSer(Pessoa novaPessoa)
        {
            try
            {
                pessoaRepository.Cadastrar(novaPessoa);

                return StatusCode(201);

            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }        

        [HttpPut("{id}")]
        public IActionResult EditUser(int id, Pessoa Atualizarpessoa)
        {
            try
            {
                pessoaRepository.Atualizar(id, Atualizarpessoa);

                return StatusCode(204);

            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }
    }
}
