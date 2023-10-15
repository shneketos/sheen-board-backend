import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BacklogsService } from './backlogs.service';
import { CreateBacklogDto } from './dto/create-backlog.dto';
import { UpdateBacklogDto } from './dto/update-backlog.dto';

@Controller('backlogs')
export class BacklogsController {
  constructor(private readonly backlogsService: BacklogsService) {}

  @Post()
  create(@Body() createBacklogDto: CreateBacklogDto) {
    return this.backlogsService.create(createBacklogDto);
  }

  @Get()
  findAll() {
    return this.backlogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.backlogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBacklogDto: UpdateBacklogDto) {
    return this.backlogsService.update(+id, updateBacklogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.backlogsService.remove(+id);
  }
}
