import { Inject, Injectable } from "@nestjs/common";
import { CLIENT_REPOSITORY_INTERFACE, IClientRepository } from "../interface/repositories/iclient.repository";
import { IFetchClientService } from "../interface/service/ifetch-client.service";


@Injectable()
export class FetchClientService implements IFetchClientService{
  constructor(
    @Inject(CLIENT_REPOSITORY_INTERFACE) private readonly iClientRepository: IClientRepository,
  ) {}

  async listAll() {
    const clients = await this.iClientRepository.getAll();

    return clients;
  } 

}