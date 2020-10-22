// Para criar: nome, email, senha

interface TechObject {
  title: string
  experience: number
}
interface createUserData {
  name?: string
  email: string
  password: string
  techs: Array<string | TechObject>
}

export default function createUser({
  name = 'guei',
  email,
  password,
  techs,
}: createUserData) {
  const user = {
    name,
    email,
    password,
    techs,
  }

  return user
}
