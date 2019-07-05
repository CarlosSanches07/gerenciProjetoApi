-- Criação da tabela tarefa
CREATE TABLE Tarefa (   Nome VARCHAR(45),
						Descricao VARCHAR(120),
						TarefaId SERIAL,
						IdPessoa_Projeto INTEGER,
						Status INTEGER,
						ProjetoId INTEGER);

-- Criação da tabela relação entre pessoa e projeo
CREATE TABLE Pessoa_Projeto ( 	IdPessoa_Projeto SERIAL,
    							ProjetoId INTEGER,
    							PessoaId INTEGER);

-- Criação da tabela Projeto
CREATE TABLE Projeto (	DataFim DATE,
						DataIni DATE,
						Descricao VARCHAR(120),
						Nome VARCHAR(45),
						ProjetoId SERIAL,
						GerenteId INTEGER
);

-- Criação da tabela Pessoa
CREATE TABLE Pessoa_Usuario (	Nome VARCHAR(45),
								Email VARCHAR(60),
								PessoaId SERIAL,
								Login VARCHAR(15),
								Senha VARCHAR(60)
);

-- Adição de chaves (primarias e estrangeiras)
ALTER TABLE Tarefa ADD PRIMARY KEY (TarefaId);
ALTER TABLE Pessoa_Projeto ADD PRIMARY KEY (IdPessoa_Projeto);
ALTER TABLE Pessoa_Usuario ADD PRIMARY KEY (PessoaId);
ALTER TABLE Projeto ADD PRIMARY KEY (ProjetoId);
ALTER TABLE Tarefa ADD FOREIGN KEY (IdPessoa_Projeto) REFERENCES Pessoa_Projeto(IdPessoa_Projeto) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE Pessoa_Projeto ADD FOREIGN KEY (ProjetoId) REFERENCES Projeto(ProjetoId) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE Pessoa_Projeto ADD FOREIGN KEY (PessoaId) REFERENCES Pessoa_Usuario(PessoaId) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE Tarefa ADD FOREIGN KEY (ProjetoId) REFERENCES Projeto(ProjetoId) ON DELETE CASCADE ON UPDATE CASCADE;