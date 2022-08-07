import { IsISO8601, IsEmail, IsString, MinLength } from 'class-validator'

export class CreateUserDto {
  @IsString()
  name!: string

  @IsEmail()
  email!: string

  @IsISO8601()
  birth!: string

  @IsString()
  @MinLength(6)
  password!: string
}
