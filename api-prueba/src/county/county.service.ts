import { Injectable } from '@nestjs/common';
import { CreateCountyDto } from './dto/create-county.dto';
import { UpdateCountyDto } from './dto/update-county.dto';
import { PrismaService } from 'src/prisma/prisma.service';
//import { Prisma } from 'src/generated/prisma/client';


@Injectable()
export class CountyService {
  constructor(private readonly prismaService: PrismaService) {

  }
  create(createCountyDto: CreateCountyDto) {
    return 'This action adds a new county';
  }

  async findAll() {
    return await this.prismaService.county.findMany({
      include: { state: true },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} county`;
  }

  update(id: number, updateCountyDto: UpdateCountyDto) {
    return `This action updates a #${id} county`;
  }

  remove(id: number) {
    return `This action removes a #${id} county`;
  }
}
