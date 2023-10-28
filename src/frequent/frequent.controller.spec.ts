import { Test, TestingModule } from '@nestjs/testing';
import { FrequentController } from './frequent.controller';
import { FrequentService } from './frequent.service';

describe('FrequentController', () => {
  let controller: FrequentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrequentController],
      providers: [FrequentService],
    }).compile();

    controller = module.get<FrequentController>(FrequentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
