import { Controller, Post, Body } from '@nestjs/common';
import { FrequentService } from './frequent.service';

@Controller('frequent')
export class FrequentController {
  constructor(private readonly frequentService: FrequentService) {}

  @Post('calculate-frequent')
  async calculateFrequent(@Body() body: { transactions: string[][] }) {
    const transactions = body.transactions;

    if (!Array.isArray(transactions) || transactions.length === 0) {
      return {
        message: 'Invalid transaction data',
      };
    }

    try {
      const frequentItemsets =
        await this.frequentService.calculateFrequent(transactions);
      return {
        frequentItemsets,
      };
    } catch (error) {
      return {
        message: 'Error while calculating frequent itemsets',
        error: error.message,
      };
    }
  }
}
