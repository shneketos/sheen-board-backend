import { Test, TestingModule } from '@nestjs/testing';
import { BacklogController } from './backlog.controller';
import { BacklogService } from './backlog.service';

describe('BacklogController', () => {
  let controller: BacklogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BacklogController],
      providers: [BacklogService],
    }).compile();

    controller = module.get<BacklogController>(BacklogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
