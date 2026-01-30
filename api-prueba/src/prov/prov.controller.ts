import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProvService } from './prov.service';
import { CreateProvDto } from './dto/create-prov.dto';
import { UpdateProvDto } from './dto/update-prov.dto';

@Controller('prov')
export class ProvController {
  constructor(private readonly provService: ProvService) {}

  @Post()
  create(@Body() createProvDto: CreateProvDto) {
    return this.provService.create(createProvDto);
  }

  @Get()
  async findAll() {
    return this.provService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.provService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProvDto: UpdateProvDto) {
    return this.provService.update(+id, updateProvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.provService.remove(+id);
  }
}
