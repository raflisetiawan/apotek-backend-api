import { Test, TestingModule } from '@nestjs/testing';
import { AprioriService } from './apriori.service';

describe('AprioriService', () => {
  let service: AprioriService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AprioriService],
    }).compile();

    service = module.get<AprioriService>(AprioriService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
