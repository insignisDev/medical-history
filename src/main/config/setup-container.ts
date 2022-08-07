import { container } from 'tsyringe'
import { useContainer } from 'routing-controllers'
import { TsyringeAdapter } from '@/infra/adapters'
import { CreateUserUseCase } from '@/application/users/use-cases/create-user-use-case'
import { CREATE_USER_USE_CASE } from '@/infra/modules/users/contants'

export const setupContainer = async (): Promise<void> => {
  useContainer(new TsyringeAdapter(container))

  container.registerSingleton<CreateUserUseCase>(
    CREATE_USER_USE_CASE,
    CreateUserUseCase
  )
}
