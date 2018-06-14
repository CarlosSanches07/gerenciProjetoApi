import modelProject from '../models/Model.Project.js'

export default class controllerProject {
	getById(req, res){
		const data = {ProjetoId: req.query.ProjetoId};
		let project = new modelProject(data);
		project.getById((data) => {
			res.send({ projects: data })
		})
	}

	save(req, res){
		let project = new modelProject(req.body.project)
		project.create((data)=> {
			res.send({message : 'data'});
		})
	}

	updateById(req, res){
		let project = new modelProject(req.body.projeto)
		project.beforeEdit = req.body.beforeEdit
		project.update((data)=> {
			res.send({edited : data});
		})
	}

	deleteById(req, res){
		let project = new modelProject(req.body.projeto)
		project.delete((data)=> {
			res.send({message: data});
		})
	}
}