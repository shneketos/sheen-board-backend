import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { BacklogService } from './backlog.service';
import { UpdateBacklogDto } from './dto/update-backlog.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('backlog')
@Controller('backlog')
export class BacklogController {
  constructor(private readonly backlogService: BacklogService) {}

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
}
