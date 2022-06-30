using Softer.Contexts;
using Softer.Domains;
using Softer.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Softer.Repositories
{
    public class PessoaRepository : IPessoaRepository
    {
        OfficerSoftContext ctx = new OfficerSoftContext();

        public void Atualizar(int id, Pessoa Atualizarpessoa)
        {
            Pessoa PessoaBuscar = ctx.Pessoas.Find(id);

            if (Atualizarpessoa.Nome != null)
            {
                PessoaBuscar.Nome = Atualizarpessoa.Nome;
            }

            if (Atualizarpessoa.Cpf != null)
            {
                PessoaBuscar.Cpf = Atualizarpessoa.Cpf;
            }

            if (Atualizarpessoa.Cep != null)
            {
                PessoaBuscar.Cep = Atualizarpessoa.Cep;
            }

            if (Atualizarpessoa.Endereco != null)
            {
                PessoaBuscar.Endereco = Atualizarpessoa.Endereco;
            }


            PessoaBuscar.Numero = Atualizarpessoa.Numero;


            if (Atualizarpessoa.Bairro != null)
            {
                PessoaBuscar.Bairro = Atualizarpessoa.Bairro;
            }

            if (Atualizarpessoa.Complemento != null)
            {
                PessoaBuscar.Complemento = Atualizarpessoa.Complemento;
            }

            if (Atualizarpessoa.Municipio != null)
            {
                PessoaBuscar.Municipio = Atualizarpessoa.Municipio;
            }

            if (Atualizarpessoa.Uf != null)
            {
                PessoaBuscar.Uf = Atualizarpessoa.Uf;
            }

            if (Atualizarpessoa.Rg != null)
            {
                PessoaBuscar.Rg = Atualizarpessoa.Rg;
            }

            ctx.Pessoas.Update(PessoaBuscar);

            ctx.SaveChanges();

        }

        public Pessoa BuscarPessoa(string name)
        {
            return ctx.Pessoas.FirstOrDefault(u => u.Nome == name);
        }

        public Pessoa BuscarPessoa(int id)
        {
            return ctx.Pessoas.FirstOrDefault(u => u.IdPessoa == id);
        }

        public Pessoa BuscarPessoaCpf(string cpf)
        {
            return ctx.Pessoas.FirstOrDefault(u => u.Cpf == cpf);
        }

        public void Cadastrar(Pessoa novaPessoa)
        {
            ctx.Pessoas.Add(novaPessoa);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Pessoas.Remove(BuscarPessoa(id));

            ctx.SaveChanges();
        }
    }
}
