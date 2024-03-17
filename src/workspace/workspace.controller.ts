import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('workspace')
@ApiTags('workspace')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Post()
  async create(@Body() createWorkspaceDto: CreateWorkspaceDto) {
    // Создаем экземпляр KanbanEntity
    const kanban = await this.workspaceService.createKanban();

    // Создаем экземпляр BacklogEntity
    const backlog = await this.workspaceService.createBacklog();

    // Создаем WorkspaceEntity и ассоциируем с KanbanEntity и BacklogEntity
    return this.workspaceService.create({
      ...createWorkspaceDto,
      kanban,
      backlog,
    });
  }
  @Get()
  findAll() {
    return this.workspaceService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.workspaceService.findById(+id);
  }

  @Get('user/:id')
  findWorkspacesByUserID(@Param('id') id: number) {
    return this.workspaceService.findWorkspacesByUserID(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workspaceService.remove(+id);
  }
}
