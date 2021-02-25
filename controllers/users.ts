
import {Request, Response} from 'express'
import UserModel from '../models/usuario';

export const getUsers = async (req: Request, res: Response) => {
  const users = await UserModel.findAll()
  res.json({
    users
  })
}
export const getUser = async (req: Request, res: Response) => {
  const {id} = req.params
  const user = await UserModel.findByPk(id)
  if(user){
    res.json({
      user
    })
  }else{
    res.json({
      error: 'User not found'
    })
  }
}
export const postUser = async (req: Request, res: Response) => {
  const {body} = req

  try {
    const existEmail = await UserModel.findOne({
      where: {
        email: body.email
      }
    })

    if(existEmail) {
      return res.status(400).json({
        msg: 'Este mail ya existe'
      })
    }

    const user = new UserModel(body)
    await user.save()
    res.json(user)
  } catch (error) {
    res.status(500).json({
      msg: 'Error en la aplicación'
    })
  }

  res.json({
    msg: 'postUser',
    body
  })
}
export const putUser = async (req: Request, res: Response) => {
  const {id} = req.params
  const {body} = req
  try {
    const existId = await UserModel.findByPk(id)

    if(!existId) {
      return res.status(400).json({
        msg: 'Este usuario no existe'
      })
    }

    await existId.update(body)
    res.json(existId)
  } catch (error) {
    res.status(500).json({
      msg: 'Error en la aplicación'
    })
  }
  res.json({
    msg: 'putUser',
    body
  })
}
export const deleteUser = async(req: Request, res: Response) => {
  const {id} = req.params
    const existId = await UserModel.findByPk(id)

    if(!existId) {
      return res.status(400).json({
        msg: 'Este usuario no existe'
      })
    }
    await existId.update({state: false})
    res.json('Usuario delete')
  res.json({
    msg: 'deleteUSer',
    id
  })
}