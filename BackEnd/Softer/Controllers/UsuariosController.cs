using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Softer.Domains;
using Softer.Interfaces;
using Softer.Repositories;
using Softer.ViewModels;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Softer.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private IUsuarioRepository usuarioRepository { get; set; }


        public UsuariosController()
        {
            usuarioRepository = new  UsuarioRepository();
        }

        [HttpPost("Login")]
        public IActionResult Login(LoginViewModel login)
        {
            Usuario usuarioLogado = usuarioRepository.Login(login.Email, login.Senha);

            if(usuarioLogado == null)
            {
                return NotFound("E-mail ou senha ínvalido");
            }

            try
            {
                Usuario usuarioBuscado = usuarioRepository.Login(login.Email, login.Senha);

                // Caso não encontre nenhum usuário com o e-mail e senha informados
                if (usuarioBuscado == null)
                {
                    // Retorna NotFound com uma mensagem de erro
                    return NotFound("E-mail ou senha inválidos!");
                }


                var claims = new[]
                {
                    // Armazena na Claim o e-mail do usuário autenticado
                    new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Email, usuarioBuscado.Email),

                    // Armazena na Claim o ID do usuário autenticado
                    new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Jti, usuarioBuscado.IdUsuario.ToString()),

                    // Armazena na Claim o nome do usuário que foi autenticado
                    // new Claim(System.IdentityModel.Tokens.Jwt.JwtRegisteredClaimNames.Typ, usuarioBuscado.IdTipoUsuarioNavigation.IdTipoUsuario.ToString()),
                   new Claim("role", usuarioBuscado.Adm.ToString())
                };

                // Define a chave de acesso ao token
                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("Softer-chave-autenticacao"));

                // Define as credenciais do token - Header
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                // Gera o token
                var token = new JwtSecurityToken(
                    issuer: "Softer.webApi",            // emissor do token
                    audience: "Softer.webApi",          // destinatário do token
                    claims: claims,                         // dados definidos acima
                    expires: DateTime.Now.AddMinutes(30),   // tempo de expiração
                    signingCredentials: creds               // credenciais do token
                );

                // Retorna Ok com o token
                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
