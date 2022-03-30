import { Request, Response } from 'express'
import { data } from '../db/users'
import { User } from '../models/User'

export default { 
   async getAll(req: Request, res: Response) {
      return res.status(200).json(data);
   },

   async search(req: Request, res: Response) {
      const { name = "", email = "" } = req.body;
      
      const users = data.filter(user => user.name.toLowerCase().includes(name.toLowerCase()) && user.email.toLowerCase().includes(email.toLowerCase()))
   
      return res.status(200).json(users);
   }
}