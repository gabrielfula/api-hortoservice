import { PrismaService } from "src/modules/core/prisma.service";
import { IAdminRepository } from "../interface/repositories/iadmin.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminRepository implements IAdminRepository {
  constructor(private readonly prisma: PrismaService) {}

   async findByUsername(username){
    const admins = await this.prisma.admin.findFirst({
      where: {
        username: username,
      }
    })

    return admins;
   }
}