import { Injectable } from "@nestjs/common";
import { IClientRepository } from "../interface/repositories/iclient.repository";
import { PrismaService } from "src/modules/core/prisma.service";

@Injectable()
export class ClientRepository implements IClientRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    const clients = await this.prisma.client.findMany({
      include: {
        address: true,
        personal_data: true
      }
    })

    return clients;
  }
}