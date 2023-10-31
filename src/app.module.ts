import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AprioriModule } from './apriori/apriori.module';
import { FrequentModule } from './frequent/frequent.module';
import { ExcelController } from './excel/excel.controller';

@Module({
  imports: [PrismaModule, AuthModule, AprioriModule, FrequentModule],
  controllers: [AppController, ExcelController],
  providers: [AppService],
})
export class AppModule {}
