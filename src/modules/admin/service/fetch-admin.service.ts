import { Inject, Injectable } from "@nestjs/common";
import { ADMIN_REPOSITORY_INTERFACE, IAdminRepository } from "../interface/repositories/iadmin.repository";
import { IFetchAdminService } from "../interface/service/ifetch-admin.service";

@Injectable()
export class FetchAdminService implements IFetchAdminService{
  constructor(
    @Inject(ADMIN_REPOSITORY_INTERFACE) private readonly iAdminRepository: IAdminRepository,
  ) {}

  async getByUsername(username: string) {
    const admin = await this.iAdminRepository.findByUsername(username);

    return admin;
  } 

}