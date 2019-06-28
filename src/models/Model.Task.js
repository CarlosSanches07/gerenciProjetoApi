import database from '../database/database.js'

export default class ModelTask {
	constructor(data){
		this.Nome = data.Nome;
		this.Descricao = data.Descricao;
		this.TarefaId = data.TarefaId;
		this.IdPessoa_Projeto = data.IdPessoa_Projeto;
		this.Status = data.Status;
		this.ProjetoId = data.ProjetoId;
	}

	getById(callback) {
		console.log(this);
		let values;
		let query = 'select nome, descricao, status, tarefaid, idpessoa_projeto from Tarefa ';
		if (this.ProjetoId !== 'null') {
			console.log('Projeto')
			query += 'where ProjetoId = $1 ';
			values = [this.ProjetoId];
		}
		if (this.TarefaId && typeof(this.TarefaId) !== String) {
			query += 'where TarefaId = $1 ';
			values = [this.TarefaId]
		}
		query += 'order by tarefaid';
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
		const query = 'update Tarefa set Status= $1 where TarefaId = $2';
		const values = [this.Status, this.TarefaId];
		const conn = new database();
		conn.connect();
		conn.query(query, values)
			.then((data) => {
				console.log(data);
				callback(data)
			})
			.catch((err) => {
				callback(err)
			});
	}

	create(callback) {
		let conn = new database();
		const content = [this.Nome, this.Descricao, this.ProjetoId, this.Status];
		const query = `insert into Tarefa(Nome, Descricao, ProjetoId, Status) values ($1,$2,$3,$4)`;
		conn.connect();
		conn.query(query, content, (err, data) => {
			if(err) {
				console.log(err);
				return;
			}
			console.log(data);
			callback(data)
		})
	}

	delete(callback) {
		const conn = new database();
		const query = 'delete from Tarefa where TarefaId = $1';
		const values = [this.TarefaId];
		conn.connect();
		conn.query(query, values)
			.then(callback(data))
			.catch(callback(err));
	}
}