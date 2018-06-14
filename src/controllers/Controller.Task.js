import modelTask from '../models/Model.Task.js'

export default class controllerTask{

	getById(req, res){
		const data = { TarefaId: req.query.TarefaId }
		const task = new modelTask(data)
		task.getById((data)=> {	
			res.send({data : data});
		})
	}

	save(req, res){
		const task = new modelTask(req.body.tarefa)
		task.create((data)=> {	
			res.send({data: data});
		})
	}

	updateById(req, res){
		const task = new modelProject(req.body.tarefa)
		task.update((data) => {
			res.send({ edited: data });
		})
	}

	deleteById(req, res){
		const task = new modelTask(req.body.tarefa)
		task.delete((data)=> {
			res.send({deleted: data})
		})
	}
}