import { CreateUserUseCase } from '@/application/users/use-cases/create-user-use-case'
import { Body, Get, JsonController, Post } from 'routing-controllers'
import { inject, injectable } from 'tsyringe'
import { CREATE_USER_USE_CASE } from './contants'
import { CreateUserDto } from './dto'

@JsonController('/users')
@injectable()
export class UsersController {
  constructor (@inject(CREATE_USER_USE_CASE) private readonly createUserUseCase: CreateUserUseCase) {}

  // @Get('/')
  // index (): any {
  //   return this.usersService.index()
  // }

  @Post('/')
  create (@Body() user: CreateUserDto): any {
    return this.createUserUseCase.execute(user)
  }
}
