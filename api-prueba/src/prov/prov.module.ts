import { Module } from '@nestjs/common';
import { ProvService } from './prov.service';
import { ProvController } from './prov.controller';

@Module({
  controllers: [ProvController],
  providers: [ProvService],
})
export class ProvModule {}
