import database from '../database/database.js'

export default class ModelUser {
	constructor(data){
		this.Nome = data.Nome;
		this.Email = data.Email;
		this.PessoaId = data.PessoaId;
		this.Login = data.Login;
		this.Senha = data.Senha;
	}

	get(callback) {
		const query = 'select * from Usuario';
		const conn = new database();
		conn.connect();
		conn.query(query, (err, data) => {
			if (err) {
				console.log(err);
			}
			callback(data.rows);
		})
	}

	login(callback) {
		const values = [this.login, this.Senha]
		const query = 'select PessoaId, Nome from Usuario where Login = $1 and Senha = $2';
		conn.connect();
		conn.query(query, values, (data, err) => {
			if(err => console.log(err));
			callback(data);
		})
	}

}