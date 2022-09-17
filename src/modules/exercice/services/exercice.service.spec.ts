import { Test, TestingModule } from '@nestjs/testing';
import httpMocks from 'node-mocks-http';
import { ExerciceModel } from 'src/Domaine/models/exercice.model';
import { ExerciceRepository } from 'src/Infrastructure/repository/exercice.repository';
import { ExerciceService } from '../services/exerice.service';

fdescribe('exerciceService', () => {
  let exerciceService: ExerciceService;

  const mockRequest = httpMocks.createRequest();
  mockRequest.exercice = new ExerciceModel('curl', 'arms', 'description', 4);
  const exerciceMock = new ExerciceModel('curl', 'arms', 'description', 4);

  const mockExerciceService = {};

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [ExerciceService, ExerciceRepository],
    })
      .overrideProvider(ExerciceService)
      .useValue(mockExerciceService)
      .compile();
    exerciceService = moduleRef.get<ExerciceService>(ExerciceService);
  });

  it('should be defined', () => {
    exerciceService.createExercice(exerciceMock);
  });
});
