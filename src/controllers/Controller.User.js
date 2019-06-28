import modelUser from '../models/Model.User.js'

export default class controllerUser {
	get(req, res){
		let user = new modelUser();
		user.get((data)=> {
			res.send({data : data});
		})
	}

	async login(req, res){
		const user = await new modelUser(req.body.user);
		user.login((data) => {
			res.send({user: data});
		})
	}

	async save(req, res) {
		console.log(req.body);
		const user = await new modelUser(req.body.user);
		user.verifyUser((data => {
			console.log(data.rowCount)
			if (data.rowCount === 0){
				user.create((data) => {
					console.log(data);
					res.send({user: data});
					return;
				})
			} else {
				res.send({erro: 'erro'});
			}
		}))
	}
}


