import database from '../database/database.js'

export default class ModelProject {
	constructor(data) {
		this._data = data;
	}

	getById(callback) {
		let values;
		let query = 'select * from Projeto';
		if (this.ProjetoId) {
			query += 'where ProjetoId = $1';
			values = [ProjetoId];
		}
		const conn = new database();
		conn.query(query, value)
			.then(data => callback(data))
			.catch(err => callback(err));
	}

	create(callback) {
		let conn = new database();
		const content = [this.DataIni, this.DataFim, this.Descricao, this.Nome];
		const query = `insert into Projeto(DataFim, DataIni, Descricao, Nome) values ($1,$2,$3,$4)`;
		conn.query(query, content)
			.then((data) => {
				callback(data);
			})
			.catch((err) => {
				callback(err);
			})
		data.close();
	}

	update(callback) {
		const query = 'update Projeto set Nome = $1, Descricao = $2, DataIni = $3, DataFim= $4 where ProjetoId = $5';
		const values = [this.Nome, this.Descricao, this.DataIni, this.DataFim, this.ProjetoId];
		const conn = new database();
		conn.query(query, values)
			.then(data => callback(data))
			.catch(err => callback(err));
	}

	delete(callback) {
		const conn = new database();
		const query = 'dalete from Projeto where ProjetoId = $1';
		const values = [this.ProjetoId];
		conn.query(query, values)
			.then(data => callback(data))
			.catch(err => callback(err));
	}
}