import { Module } from '@nestjs/common';
import { BacklogSprintService } from './backlog_sprint.service';
import { BacklogSprintController } from './backlog_sprint.controller';

@Module({
  controllers: [BacklogSprintController],
  providers: [BacklogSprintService],
})
export class BacklogSprintModule {}
