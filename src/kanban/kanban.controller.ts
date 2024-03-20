import { Controller, Get, Post, Param } from '@nestjs/common';
import { KanbanService } from './kanban.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('kanban')
@Controller('kanban')
export class KanbanController {
  constructor(private readonly kanbanService: KanbanService) {}

  @Post()
  @Get()
  findAll() {
    return this.kanbanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kanbanService.findOne(+id);
  }
}
