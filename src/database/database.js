import pg from 'pg'

export default class database{
	constructor() {
		const connectionString = 'localhost://algumcoisa'; 
		const client = new pg.Client(connectionString);
		return client;
	}
}