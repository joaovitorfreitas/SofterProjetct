CREATE DATABASE OfficerSoft

GO

USE OfficerSoft

GO


-- Criando Tabela Pessoa

CREATE TABLE Pessoa(
IdPessoa INT IDENTITY PRIMARY KEY,
Nome VARCHAR(255) NOT NULL,
CPF VARCHAR (14) UNIQUE NOT NULL ,
CEP VARCHAR (9) NOT NULL,
Endereco varchar(100) NOT NULL,
Numero INT NOT NULL,
Bairro VARCHAR(100) NOT NULL,
Complemento VARCHAR(100) ,
Municipio VARCHAR(100) NOT NULL,
UF VARCHAR (2) ,
RG VARCHAR(12) NOT NULL,
)

GO

-- Criando Tabela usuario

CREATE TABLE Usuario(
IdUsuario INT IDENTITY PRIMARY KEY,
Email VARCHAR(100),
Senha VARCHAR(100),
Adm BIT NOT NULL,
)



INSERT INTO Pessoa (Nome, CPF, CEP, Endereco, Numero, Bairro, Complemento, Municipio, UF, RG)
VALUES 
('Edson', '208.478.480-37', '71676-040', 
'Área Especial SEDB Carmelo Nossa Senhora do Carmo', 
223, 'Setor de Habitações Individuais Sul', 
'', 'Brasília', 'DF',  '22.918.060-7');

INSERT INTO Usuario (Email, Adm, Senha) VALUES ('Admin@admin.com', 1, 'Admin')

INSERT INTO Usuario (Email, Adm, Senha) VALUES ('Admin2@admin.com', 1, 'Admin')


Select * FROM Usuario

Select * FROM Pessoa


