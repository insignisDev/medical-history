import { BaseEntity } from '@/domain/shared/entities/base-entity'

export class User extends BaseEntity {
  name: string
  email: string
  birth: string
  password: string
  status: string
}
