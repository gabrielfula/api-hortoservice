export const FETCH_ADMIN_SERVICE_INTERFACE = 'FETCH_ADMIN_SERVICE_INTERFACE'


export interface IFetchAdminService {
  getByUsername: (username: string) => Promise<any>
}