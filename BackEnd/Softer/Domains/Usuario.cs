using System;
using System.Collections.Generic;

#nullable disable

namespace Softer.Domains
{
    public partial class Usuario
    {
        public int IdUsuario { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public bool Adm { get; set; }
    }
}
