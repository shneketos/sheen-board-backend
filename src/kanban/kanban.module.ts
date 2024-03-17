import { Module } from '@nestjs/common';
import { KanbanService } from './kanban.service';
import { KanbanController } from './kanban.controller';
import { KanbanEntity } from './entities/kanban.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [KanbanController],
  providers: [KanbanService],
  imports: [TypeOrmModule.forFeature([KanbanEntity])],
  exports: [KanbanService],
})
export class KanbanModule {}
