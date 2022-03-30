import { Request, Response } from 'express'
import { data } from '../db/users'
import { User } from '../models/User'

export default { 
   async getAll(req: Request, res: Response){
      return res.status(200).json({data});
   },
}