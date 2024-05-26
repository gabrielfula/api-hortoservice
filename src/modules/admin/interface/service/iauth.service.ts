export const AUTH_SERVICE_INTERFACE = 'AUTH_SERVICE_INTERFACE'


export interface IAuthService {
  login: (authenticationDto: any) => Promise<any>
}