import { Module } from '@nestjs/common';
import { BacklogSprintService } from './backlog_sprint.service';
import { BacklogSprintController } from './backlog_sprint.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BacklogSprintEntity } from './entities/backlog_sprint.entity';

@Module({
  controllers: [BacklogSprintController],
  providers: [BacklogSprintService],
  imports: [TypeOrmModule.forFeature([BacklogSprintEntity])],
  exports: [BacklogSprintService],
})
export class BacklogSprintModule {}
