import { container } from 'tsyringe'
import { useContainer } from 'routing-controllers'
import { UsersService } from '@/infra/modules/users/interfaces'
import { TsyringeAdapter } from '@/infra/adapters'
import { UsersServiceImpl } from '@/infra/modules/users/users.service'

export const setupContainer = async (): Promise<void> => {
  useContainer(new TsyringeAdapter(container))

  container.registerSingleton<UsersService>(
    'UsersService',
    UsersServiceImpl
  )
}
