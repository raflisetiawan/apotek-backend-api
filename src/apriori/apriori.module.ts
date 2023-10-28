import { Module } from '@nestjs/common';
import { AprioriService } from './apriori.service';
import { AprioriController } from './apriori.controller';

@Module({
  controllers: [AprioriController],
  providers: [AprioriService],
})
export class AprioriModule {}
