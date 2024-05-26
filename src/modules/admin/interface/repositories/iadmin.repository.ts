
export const ADMIN_REPOSITORY_INTERFACE = "ADMIN_REPOSITORY_INTERFACE";

export interface IAdminRepository {
  findByUsername: (username: string) => Promise<any>
}