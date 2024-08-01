export const FETCH_CLIENT_SERVICE_INTERFACE = "FETCH_CLIENT_SERVICE_INTERFACE"

export interface IFetchClientService {
  listAll: () => Promise<any>;

  paginate: (filters: any) => Promise<any>;
}