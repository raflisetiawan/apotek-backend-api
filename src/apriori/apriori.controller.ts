import { Controller, Post, Body } from '@nestjs/common';
import { AprioriService } from './apriori.service';

@Controller('apriori')
export class AprioriController {
  constructor(private readonly aprioriService: AprioriService) {}

  @Post('calculate-apriori')
  async mineAssociationRules(@Body() body: { transactions: string[][] }) {
    const transactions = body.transactions;
    // Memastikan Anda menerima data transaksi dalam format yang sesuai
    if (!Array.isArray(transactions) || transactions.length === 0) {
      return {
        message: 'Invalid transaction data',
      };
    }

    // Menggunakan service untuk mengekstrak aturan asosiasi
    const associationRules = await this.aprioriService.mineAssociationRules(
      transactions,
      0.05,
    );

    return {
      associationRules,
    };
  }
}
