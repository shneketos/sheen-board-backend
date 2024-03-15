import { Module } from '@nestjs/common';
import { KanbanListService } from './kanban_list.service';
import { KanbanListController } from './kanban_list.controller';

@Module({
  controllers: [KanbanListController],
  providers: [KanbanListService],
})
export class KanbanListModule {}
