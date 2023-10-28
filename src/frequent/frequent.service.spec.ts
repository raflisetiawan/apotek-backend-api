import { Test, TestingModule } from '@nestjs/testing';
import { FrequentService } from './frequent.service';

describe('FrequentService', () => {
  let service: FrequentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrequentService],
    }).compile();

    service = module.get<FrequentService>(FrequentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
