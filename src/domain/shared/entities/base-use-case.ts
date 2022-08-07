export abstract class BaseUseCase<Request = unknown, Response =void> {
  abstract execute(request?: Request): Response | Promise<Response>
}
