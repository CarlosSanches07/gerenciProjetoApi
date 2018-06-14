import pg from 'pg'

export default class database{
	constructor() {
		const connectionString = 'postgresql://postgres:0707Link@localhost:5432/gerenciaProjeto';
		let client;
		try {
			client = new pg.Client(connectionString);
		}catch(err) {
			console.log(err)
		}
		return client;
	}
}