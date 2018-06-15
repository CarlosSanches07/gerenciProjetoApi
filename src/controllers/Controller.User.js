import modelUser from '../models/Model.User.js'

export default class controllerUser {
	get(req, res){
		let user = new modelUser();
		user.getById((data)=> {
			res.send({data : data});
		})
	}

	async login(req, res){
		const user = await new modelUser(req.body.user);
		user.login((data) => {
			res.send({data: 'data'});
		})
	}
}


