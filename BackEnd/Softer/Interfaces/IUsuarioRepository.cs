using Softer.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Softer.Interfaces
{
    interface IUsuarioRepository
    {
        void Deletar(int id);

        Usuario Login(string email, string senha);


    }
}
