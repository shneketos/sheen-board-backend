import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BacklogSprintService } from './backlog_sprint.service';
import { CreateBacklogSprintDto } from './dto/create-backlog_sprint.dto';
import { UpdateBacklogSprintDto } from './dto/update-backlog_sprint.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('backlog-sprint')
@Controller('backlog-sprint')
export class BacklogSprintController {
  constructor(private readonly backlogSprintService: BacklogSprintService) {}

  @Post()
  create(@Body() createBacklogSprintDto: CreateBacklogSprintDto) {
    return this.backlogSprintService.create(createBacklogSprintDto);
  }

  @Get()
  findAll() {
    return this.backlogSprintService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBacklogSprintDto: UpdateBacklogSprintDto,
  ) {
    return this.backlogSprintService.update(+id, updateBacklogSprintDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.backlogSprintService.remove(+id);
  }
}
