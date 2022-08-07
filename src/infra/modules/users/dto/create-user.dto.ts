import { IsDateString, IsEmail, IsString, MinLength } from 'class-validator'

export class CreateUserDto {
  @IsString()
  name!: string

  @IsEmail()
  email!: string

  @IsDateString()
  birth!: Date

  @IsString()
  @MinLength(6)
  password!: string
}
