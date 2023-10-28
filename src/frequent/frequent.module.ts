import { Module } from '@nestjs/common';
import { FrequentService } from './frequent.service';
import { FrequentController } from './frequent.controller';

@Module({
  controllers: [FrequentController],
  providers: [FrequentService],
})
export class FrequentModule {}
