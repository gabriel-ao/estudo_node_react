import { Request, Response } from 'express'
import createUser from './services/CreateUser'

// string, number, boolean, object array
// interface

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: 'Gabriel@kroton.com.br',
    password: '123456789',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
      { title: 'Javascript', experience: 100 },
    ],
  })

  console.log(user.email)
  return res.json({ message: 'Olá mundo' })
}
