import { Injectable } from '@nestjs/common';
import { Apriori, Itemset, IAprioriResults } from 'node-apriori';

@Injectable()
export class FrequentService {
  async calculateFrequent(transactions: string[][]) {
    const minSupport = 0.4;
    const apriori: Apriori<string> = new Apriori<string>(minSupport);

    return new Promise<IAprioriResults<string>>((resolve, reject) => {
      // Event handler for when a frequent itemset is found.
      apriori.on('data', (itemset: Itemset<string>) => {
        // Do something with the frequent itemset.
        const support: number = itemset.support;
        const items: string[] = itemset.items;
      });

      // Execute Apriori on the given set of transactions.
      apriori
        .exec(transactions)
        .then((result: IAprioriResults<string>) => {
          // Returns both the collection of frequent itemsets and execution time in milliseconds.
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
