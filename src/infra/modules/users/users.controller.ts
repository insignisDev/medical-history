import { Body, Get, JsonController, Post } from 'routing-controllers'
import { inject, injectable } from 'tsyringe'
import { CreateUserDto } from './dto'
import { UsersService } from './interfaces'

@JsonController('/users')
@injectable()
export class UsersController {
  constructor (@inject('UsersService') private readonly usersService: UsersService) {}

  @Get('/')
  index (): any {
    return this.usersService.index()
  }

  @Post('/')
  create (@Body() user: CreateUserDto): any {
    console.log(user)
    return { message: 'usuario criado' }
  }
}
