import { Injectable } from '@nestjs/common';
import { FPGrowth, Itemset as fpItemSet } from 'node-fpgrowth';

@Injectable()
export class FrequentService {
  private fpgrowth: FPGrowth<string>;
  private supportThreshold: number;
  private batchSize: number;

  constructor() {
    this.supportThreshold = 0.7;
    this.batchSize = 1000;
    this.fpgrowth = new FPGrowth<string>(this.supportThreshold);
  }

  async calculateFrequent(
    transactions: string[][],
  ): Promise<fpItemSet<string>[]> {
    const filteredTransactions = this.filterInfrequentItems(
      transactions,
      this.supportThreshold,
    );

    const frequentItemsets: fpItemSet<string>[] = [];

    this.fpgrowth.on('data', (itemset: fpItemSet<string>) => {
      frequentItemsets.push(itemset);
    });

    const processBatch = async (batch: string[][]) => {
      await this.fpgrowth.exec(batch);
    };

    const processBatches = async () => {
      const batchPromises = filteredTransactions.map((batch) =>
        processBatch(batch),
      );
      await Promise.all(batchPromises);
      return frequentItemsets;
    };

    return processBatches();
  }

  private filterInfrequentItems(
    transactions: string[][],
    minSupport: number,
  ): string[][] {
    const itemFrequency: Map<string, number> = new Map();
    transactions.forEach((transaction) => {
      transaction.forEach((item) => {
        const frequency = itemFrequency.get(item) || 0;
        itemFrequency.set(item, frequency + 1);
      });
    });

    transactions.forEach((transaction, index) => {
      transactions[index] = transaction.filter(
        (item) => itemFrequency.get(item) >= minSupport,
      );
    });
  }
}
