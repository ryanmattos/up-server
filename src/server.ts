import express, { Router } from 'express'
import UserController from './controllers/UserController'; './controllers/UserController'

const api = express();
const routes = Router()

api.use(express.json())

routes.get('/user', UserController.getAll);

api.use(routes)

api.listen(3333, () => console.log('listening'))