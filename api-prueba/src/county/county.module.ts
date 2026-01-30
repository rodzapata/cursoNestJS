import { Module } from '@nestjs/common';
import { CountyService } from './county.service';
import { CountyController } from './county.controller';

@Module({
  controllers: [CountyController],
  providers: [CountyService],
})
export class CountyModule {}
