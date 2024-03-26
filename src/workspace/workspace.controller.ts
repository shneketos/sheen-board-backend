import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';

@Controller('workspace')
@ApiTags('workspace')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Post()
  async create(@Body() createWorkspaceDto: CreateWorkspaceDto) {
    const kanban = await this.workspaceService.createKanban();

    const calendar = await this.workspaceService.createCalendar();

    const backlog = await this.workspaceService.createBacklog();

    return this.workspaceService.create({
      ...createWorkspaceDto,
      kanban,
      backlog,
      calendar,
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
  @Get('/members/:id')
  async getMembers(@Param('id') id: number): Promise<any[]> {
    return this.workspaceService.getMembers(id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workspaceService.remove(+id);
  }
  @Patch('/members/:id')
  update(
    @Param('id') id: string,
    @Body() updateWorkspaceDto: UpdateWorkspaceDto,
  ) {
    return this.workspaceService.update(+id, updateWorkspaceDto);
  }
}
