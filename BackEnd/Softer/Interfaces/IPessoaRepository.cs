using Softer.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Softer.Interfaces
{
    interface IPessoaRepository
    {
        Pessoa BuscarPessoa(string name);

        Pessoa BuscarPessoaCpf(string cpf);

        Pessoa BuscarPessoa(int id);

        void Cadastrar(Pessoa novaPessoa);

        void Atualizar(int id, Pessoa Atualizarpessoa);

        void Deletar(int id);
    }
}
