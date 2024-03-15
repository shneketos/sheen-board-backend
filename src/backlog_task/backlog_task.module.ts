import { Module } from '@nestjs/common';
import { BacklogTaskService } from './backlog_task.service';
import { BacklogTaskController } from './backlog_task.controller';

@Module({
  controllers: [BacklogTaskController],
  providers: [BacklogTaskService],
})
export class BacklogTaskModule {}
