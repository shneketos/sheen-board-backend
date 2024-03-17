import { Module } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { WorkspaceController } from './workspace.controller';
import { WorkspaceEntity } from './entities/workspace.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KanbanEntity } from 'src/kanban/entities/kanban.entity';
import { BacklogEntity } from 'src/backlog/entities/backlog.entity';

@Module({
  controllers: [WorkspaceController],
  providers: [WorkspaceService],
  imports: [
    TypeOrmModule.forFeature([WorkspaceEntity, KanbanEntity, BacklogEntity]),
  ],
  exports: [WorkspaceService],
})
export class WorkspaceModule {}
