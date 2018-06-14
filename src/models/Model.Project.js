import database from '../database/database.js'

export default class ModelProject {
	constructor(data){
		this.Nome = data.Nome;
		this.DataFim = data.DataFim;
		this.DataIni = data.DataIni;
		this.Descricao = data.Descricao;
		this.ProjetoId = data.ProjetoId;
	}

	getById(callback) {
		let values;
		let query = 'select * from Projeto ';
		if (this.ProjetoId) {
			query += 'where ProjetoId = $1';
			values = [this.ProjetoId];
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
		const content = [this.DataIni, this.DataFim, this.Descricao, this.Nome];
		const query = `insert into Projeto(DataFim, DataIni, Descricao, Nome) values ($1,$2,$3,$4)`;
		conn.connect();
		conn.query(query, content)
			.then((data) => {
				callback(data);
			})
			.catch((err) => {
				callback(err);
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
}