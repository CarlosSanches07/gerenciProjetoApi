import modelTask from '../models/Model.Task.js'

export default class controllerTask{

	async getById(req, res){
		const task = await new modelTask(req.query)
		task.getById((data)=> {	
			res.send(data);
		})
	}

	async save(req, res){
		console.log(req.body)
		const task = await new modelTask(req.body)
		task.create((data)=> {	
			res.send({message: data});
		})
	}

	updateById(req, res){
		const task = new modelTask(req.body)
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