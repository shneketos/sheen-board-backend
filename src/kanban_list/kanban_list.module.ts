import { Module } from '@nestjs/common';
import { KanbanListService } from './kanban_list.service';
import { KanbanListController } from './kanban_list.controller';
import { KanbanListEntity } from './entities/kanban_list.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [KanbanListController],
  providers: [KanbanListService],
  imports: [TypeOrmModule.forFeature([KanbanListEntity])],
  exports: [KanbanListService],
})
export class KanbanListModule {}
