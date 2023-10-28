import { Injectable } from '@nestjs/common';
const apriori = require('apriori');

@Injectable()
export class AprioriService {
  async mineAssociationRules(transactions: string[][], minSupport: number) {
    const Apriori = new apriori.Algorithm(0.01, minSupport, false);
    const results = Apriori.analyze(transactions);
    return {
      result: results.associationRules,
      support: results.frequentItemSets,
    };
  }
}
