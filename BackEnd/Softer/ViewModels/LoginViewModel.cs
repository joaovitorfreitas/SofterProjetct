using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Softer.ViewModels
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Informe Email")]
        public string Email { get; set; }        
        
        [Required(ErrorMessage = "Informe Senha")]
        public string Senha { get; set; }
    }
}
