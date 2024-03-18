import { Module } from '@nestjs/common';
import { BacklogTaskService } from './backlog_task.service';
import { BacklogTaskController } from './backlog_task.controller';
import { BacklogTaskEntity } from './entities/backlog_task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [BacklogTaskController],
  providers: [BacklogTaskService],
  imports: [TypeOrmModule.forFeature([BacklogTaskEntity])],
  exports: [BacklogTaskService],
})
export class BacklogTaskModule {}
