import { Module } from '@nestjs/common';
import { KanbanTasksService } from './kanban_tasks.service';
import { KanbanTasksController } from './kanban_tasks.controller';
import { KanbanTaskEntity } from './entities/kanban_task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KanbanListEntity } from 'src/kanban_list/entities/kanban_list.entity';

@Module({
  controllers: [KanbanTasksController],
  providers: [KanbanTasksService],
  imports: [TypeOrmModule.forFeature([KanbanTaskEntity, KanbanListEntity])],
  exports: [KanbanTasksService],
})
export class KanbanTasksModule {}
