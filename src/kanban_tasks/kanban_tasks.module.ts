import { Module } from '@nestjs/common';
import { KanbanTasksService } from './kanban_tasks.service';
import { KanbanTasksController } from './kanban_tasks.controller';

@Module({
  controllers: [KanbanTasksController],
  providers: [KanbanTasksService],
})
export class KanbanTasksModule {}
