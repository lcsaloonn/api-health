import { Test, TestingModule } from '@nestjs/testing';
import { SortAlgorithm } from './sortalgorithm.service';

describe('SortAlgorithm', () => {
  let service = SortAlgorithm;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SortAlgorithm],
    }).compile();
  });
});
