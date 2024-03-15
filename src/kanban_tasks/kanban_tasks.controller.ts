import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KanbanTasksService } from './kanban_tasks.service';
import { CreateKanbanTaskDto } from './dto/create-kanban_task.dto';
import { UpdateKanbanTaskDto } from './dto/update-kanban_task.dto';

@Controller('kanban-tasks')
export class KanbanTasksController {
  constructor(private readonly kanbanTasksService: KanbanTasksService) {}

  @Post()
  create(@Body() createKanbanTaskDto: CreateKanbanTaskDto) {
    return this.kanbanTasksService.create(createKanbanTaskDto);
  }

  @Get()
  findAll() {
    return this.kanbanTasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kanbanTasksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKanbanTaskDto: UpdateKanbanTaskDto) {
    return this.kanbanTasksService.update(+id, updateKanbanTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kanbanTasksService.remove(+id);
  }
}
