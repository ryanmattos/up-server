import cors from 'cors';
import express, { Router } from 'express'
import UserController from './controllers/UserController'; './controllers/UserController'

const api = express();
const routes = Router()

api.use(cors());
api.use(express.json())

routes.get('/user', UserController.getAll);
routes.post('/user/search', UserController.search);

api.use(routes)

api.listen(3333, () => console.log('listening'))