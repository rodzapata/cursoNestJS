import { Injectable } from '@nestjs/common';
import { CreateProvDto } from './dto/create-prov.dto';
import { UpdateProvDto } from './dto/update-prov.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProvService {
  constructor(private readonly prismaService: PrismaService) {

  }

  create(createProvDto: CreateProvDto) {
    return 'This action adds a new prov';
  }

  async findAll() {
    return await this.prismaService.prov.findMany();

  }

  findOne(id: number) {
    return `This action returns a #${id} prov`;
  }

  update(id: number, updateProvDto: UpdateProvDto) {
    return `This action updates a #${id} prov`;
  }

  remove(id: number) {
    return `This action removes a #${id} prov`;
  }
}
