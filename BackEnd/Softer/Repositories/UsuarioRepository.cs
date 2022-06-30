using Softer.Contexts;
using Softer.Domains;
using Softer.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Softer.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        OfficerSoftContext ctx = new OfficerSoftContext();

        public Usuario BuscarUsuario(int id)
        {
            return ctx.Usuarios.FirstOrDefault(c => c.IdUsuario == id);

        }

        public void Deletar(int id)
        {
            ctx.Usuarios.Remove(BuscarUsuario(id));

            ctx.SaveChanges();
        }

        public Usuario Login(string email, string senha)
        {
            Usuario UsuarioBuscado = ctx.Usuarios.FirstOrDefault(o => o.Email == email && o.Senha == senha);

            return UsuarioBuscado;
        }
    }
}
