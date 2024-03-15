import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BacklogService } from './backlog.service';
import { CreateBacklogDto } from './dto/create-backlog.dto';
import { UpdateBacklogDto } from './dto/update-backlog.dto';

@Controller('backlog')
export class BacklogController {
  constructor(private readonly backlogService: BacklogService) {}

  @Post()
  create(@Body() createBacklogDto: CreateBacklogDto) {
    return this.backlogService.create(createBacklogDto);
  }

  @Get()
  findAll() {
    return this.backlogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.backlogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBacklogDto: UpdateBacklogDto) {
    return this.backlogService.update(+id, updateBacklogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.backlogService.remove(+id);
  }
}
