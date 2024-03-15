import { Module } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { WorkspaceController } from './workspace.controller';
import { WorkspaceEntity } from './entities/workspace.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [WorkspaceController],
  providers: [WorkspaceService],
  imports: [TypeOrmModule.forFeature([WorkspaceEntity])],
  exports: [WorkspaceService],
})
export class WorkspaceModule {}
