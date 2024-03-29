import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KanbanListService } from './kanban_list.service';
import { CreateKanbanListDto } from './dto/create-kanban_list.dto';
import { UpdateKanbanListDto } from './dto/update-kanban_list.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('kanban-list')
@Controller('kanban-list')
export class KanbanListController {
  constructor(private readonly kanbanListService: KanbanListService) {}

  @Post()
  create(@Body() createKanbanListDto: CreateKanbanListDto) {
    return this.kanbanListService.create(createKanbanListDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateKanbanListDto: UpdateKanbanListDto,
  ) {
    return this.kanbanListService.update(+id, updateKanbanListDto);
  }

  @Delete('cards/:id')
  removeCards(@Param('id') id: string) {
    return this.kanbanListService.removeCards(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kanbanListService.remove(+id);
  }
}
