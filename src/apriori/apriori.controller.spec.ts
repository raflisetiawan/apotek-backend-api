import { Test, TestingModule } from '@nestjs/testing';
import { AprioriController } from './apriori.controller';
import { AprioriService } from './apriori.service';

describe('AprioriController', () => {
  let controller: AprioriController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AprioriController],
      providers: [AprioriService],
    }).compile();

    controller = module.get<AprioriController>(AprioriController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
