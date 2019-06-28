import database from '../database/database.js'

export default class ModelProject {
	constructor(data){
		console.log(data)
		this.Nome = data.Nome;
		this.DataFim = data.DataFim;
		this.DataIni = data.DataIni;
		this.Descricao = data.Descricao;
		this.ProjetoId = data.ProjetoId;
		this.GerenteId = data.GerenteId;
	}

	getById(callback) {
		let values;
		let query = 'select * from Projeto as p join Pessoa_Projeto as pp using(ProjetoId)';
		if (this.GerenteId) {
			query += 'where PessoaId = $1';
			values = [this.GerenteId];
		}
		const conn = new database();
		conn.connect();
		conn.query(query, values, (err, data) => {
			if(err) {
				console.log(err);
			}
			callback(data.rows);
		})
	}

	create(callback) {
		let conn = new database();
		const content = [this.DataIni, this.DataFim, this.Descricao, this.Nome, this.GerenteId];
		const query = `insert into Projeto(DataFim, DataIni, Descricao, Nome, GerenteId) values ($1,$2,$3,$4,$5) returning ProjetoId`;
		conn.connect();
		conn.query(query, content, (err, data) => {
			if(err) {
				console.log(err);
			}
			const projId = data.rows[0].projetoid;
			const query2 = 'insert into Pessoa_Projeto(ProjetoId, PessoaId) values ($1, $2)';
			const values = [projId, this.GerenteId];
			conn.query(query2, values,(err, data) => {
				if(err) {
					console.log(err);
				}
				callback(data);
			})
		})
	}

	update(callback) {
		const query = 'update Projeto set Nome = $1, Descricao = $2, DataIni = $3, DataFim= $4 where ProjetoId = $5';
		const values = [this.Nome, this.Descricao, this.DataIni, this.DataFim, this.ProjetoId];
		const conn = new database();
		conn.connect();
		conn.query(query, values)
		.then((data) =>{
		 callback(data)
		})		
		.catch((err) => {
			callback(err)
		});
	}

	delete(callback) {
		const conn = new database();
		const query = 'delete from Projeto where ProjetoId = $1';
		const values = [this.ProjetoId];
		conn.connect();
		conn.query(query, values)
			.then((data) => {
				callback(data)
			})
			.catch((err) => {
				callback(err)
			});
	}

	getByProjetoId(callback) {
		const conn = new database();
		const query = `select PessoaId from Pessoa_Projeto where ProjetoId = $1`;
		const values = [this.ProjetoId];
		console.log(this);
		conn.connect();
		conn.query(query, values, (err, data) => {
			if(err)
				console.log(err);
			callback(data.rows);
		})
	}
}