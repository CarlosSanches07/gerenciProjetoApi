import modelProject from '../models/Model.Project.js'

export default class controllerProject {
	async getById(req, res){
		const data = {ProjetoId: req.query.ProjetoId};
		let project = await new modelProject(data);
		project.getById((data) => {
			console.log(data);
			res.send({ projects: data })
		})
	}

	async save(req, res){
		console.log(req.body);
		let project = await new modelProject(req.body);
		project.create((data)=> {
			res.send({message : 'data'});
		})
	}

	async updateById(req, res){
		let project = await new modelProject(req.body.projeto)
		project.beforeEdit = req.body.beforeEdit
		project.update((data)=> {
			res.send({edited : data});
		})
	}

	async deleteById(req, res){
		let project = await new modelProject(req.body.projeto)
		project.delete((data)=> {
			res.send({message: data});
		})
	}
}