import { Controller, Get, Inject, Param, Req } from "@nestjs/common";
import { FETCH_CLIENT_SERVICE_INTERFACE, IFetchClientService } from "src/modules/client/interface/service/ifetch-client.service";
import { ResponsePagination } from "../responses/paginate-response";

@Controller('clients')
export class ClientController {
  constructor(
    @Inject(FETCH_CLIENT_SERVICE_INTERFACE) private readonly iFetchClientService: IFetchClientService,
  ) {}

  @Get("/")
  async pagination(
    @Req() req
  ): Promise<any> {
    const clients = await this.iFetchClientService.paginate(req.query);

    return ResponsePagination.serialize(clients);
  }

  @Get("/:uuid")
  async details(
    @Param('uuid') uuid: string
  ): Promise<any> {
    const client = await this.iFetchClientService.listAll();

    return client;
  }
}