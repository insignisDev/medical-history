import { injectable } from 'tsyringe'
import { UsersService } from './interfaces'
@injectable()
export class UsersServiceImpl implements UsersService {
  index (): { name: string, age: number } {
    return {
      name: 'Jhon',
      age: 28
    }
  }
}
