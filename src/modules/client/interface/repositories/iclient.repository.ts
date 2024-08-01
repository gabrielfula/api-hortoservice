
export const CLIENT_REPOSITORY_INTERFACE = "CLIENT_REPOSITORY_INTERFACE";

export interface IClientRepository {
  getAll: () => Promise<any>;

  paginate: (skip: number, take: number) => Promise<any>
}