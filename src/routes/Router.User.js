import express from 'express'

import controllerUser from '../controllers/Controller.User.js'

let routerUser = express.Router()

let user = new controllerUser();

routerUser.get('/',(req, res)=> {
	user.get(req, res);
})

routerUser.post('/post',(req,res)=> {
	user.save(req, res);
})

routerUser.put('/put',(req, res)=> {
	user.updateById(req, res);
})

routerUser.delete('/delete', (req, res)=> {
	user.deleteById(req, res);
})

routerUser.post('/login',(req, res)=> {
	user.login(req,res);
})

export default routerUser;