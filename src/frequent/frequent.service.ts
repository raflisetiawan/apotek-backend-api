import { Injectable } from '@nestjs/common';
// import { Apriori, Itemset, IAprioriResults } from 'node-apriori';
import { FPGrowth, Itemset as fpItemSet } from 'node-fpgrowth';

@Injectable()
export class FrequentService {
  async calculateFrequent(transactions: string[][]) {
    // const minSupport = 0.4;
    // const apriori: Apriori<string> = new Apriori<string>(minSupport);
    // let number = 0;
    const fpgrowth: FPGrowth<string> = new FPGrowth<string>(0.4);
    return new Promise<any>((resolve, reject) => {
      fpgrowth.on('data', (itemset: fpItemSet<string>) => {
        // Do something with the frequent itemset.
        // console.log(number++);

        const support: number = itemset.support;
        const items: string[] = itemset.items;
        // console.log(support);
        // console.log(items);
      });
      // Event handler for when a frequent itemset is found.
      // apriori.on('data', (itemset: Itemset<string>) => {
      //   // Do something with the frequent itemset.
      //   const support: number = itemset.support;
      //   console.log(support);

      //   const items: string[] = itemset.items;
      //   console.log(items);
      // });
      fpgrowth
        .exec(transactions)
        .then((itemsets: fpItemSet<string>[]) => {
          resolve(itemsets);
          // Returns an array representing the frequent itemsets.
        })
        .catch((error) => reject(error));
      //   // Execute Apriori on the given set of transactions.
      // apriori
      //   .exec(transactions)
      //   .then((result: IAprioriResults<string>) => {
      //     // Returns both the collection of frequent itemsets and execution time in milliseconds.
      //     resolve(result);
      //   })
      //   .catch((error) => {
      //     reject(error);
      //   });
    });
  }
}
