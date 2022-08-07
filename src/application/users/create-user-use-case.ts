import { BaseUseCase } from '@/domain/shared/entities/base-use-case'
import { CreateUserDto } from '../dto/create-user.dto'

export class CreateUserUseCase implements BaseUseCase<CreateUserDto, string> {
  execute (payload: CreateUserDto): string | Promise<string> {
    console.log(payload)
    return payload.name
  }
}
