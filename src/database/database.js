import pg from 'pg'

export default class database{
	constructor() {
		const connectionString = 'localhost:5432/gerenciaProjeto'; 
		const client = new pg.Client(connectionString);
		return client;
	}
}