import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AprioriModule } from './apriori/apriori.module';
import { FrequentModule } from './frequent/frequent.module';

@Module({
  imports: [PrismaModule, AuthModule, AprioriModule, FrequentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
