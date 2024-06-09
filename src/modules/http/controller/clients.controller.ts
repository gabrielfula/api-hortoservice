import { Controller, Get, Inject } from "@nestjs/common";
import { FETCH_CLIENT_SERVICE_INTERFACE, IFetchClientService } from "src/modules/client/interface/service/ifetch-client.service";

@Controller('clients')
export class ClientController {
  constructor(
    @Inject(FETCH_CLIENT_SERVICE_INTERFACE) private readonly iFetchClientService: IFetchClientService,
  ) {}

  @Get("/")
  async get(): Promise<any> {
    const clients = await this.iFetchClientService.listAll();

    return clients;
  }
}