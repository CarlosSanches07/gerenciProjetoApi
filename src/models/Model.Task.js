import database from '../database/database.js'

export default class ModelTask {
	constructor(data){
		this.Nome = data.Nome;
		this.Descricao = data.Descricao;
		this.TarefaId = data.TarefaId;
		this.IdPessoa_Projeto = data.IdPessoa_Projeto;
		this.Status = data.Status;
	}

	getById(callback) {
		let values;
		let query = 'select * from Tarefa ';
		if (this.ProjetoId) {
			query += 'where TarefaId = $1';
			values = [this.TarefaId];
		}
		const conn = new database();
		conn.connect();
		conn.query(query, values, (err, data) => {
			if (err) {
				console.log(err);
			}
			callback(data.rows);
		})

	}

	update(callback) {
		const query = 'update Tarefa set Nome = $1, Descricao = $2, IdPessoa_Projeto = $3, Status= $4 where TarefaId = $5';
		const values = [this.Nome, this.Descricao, this.IdPessoa_Projeto, this.Status, this.TarefaId];
		const conn = new database();
		conn.connect();
		conn.query(query, values)
			.then((data) => {
				callback(data)
			})
			.catch((err) => {
				callback(err)
			});
	}

	create(callback) {
		let conn = new database();
		const content = [this.Nome, this.Descricao, this.IdPessoa_Projeto, this.Status];
		const query = `insert into Projeto(Nome, Descricao, IdPessoa_Projeto, Status) values ($1,$2,$3,$4)`;
		conn.connect();
		conn.query(query, content)
			.then((data) => {
				callback(data);
			})
			.catch((err) => {
				callback(err);
			})
	}

	delete(callback) {
		const conn = new database();
		const query = 'delete from Tarefa where TarefaId = $1';
		const values = [this.TarefaId];
		conn.connect();
		conn.query(query, values)
			.then((data) => {
				callback(data)
			})
			.catch((err) => {
				callback(err)
			});
	}
}