import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BacklogTaskService } from './backlog_task.service';
import { CreateBacklogTaskDto } from './dto/create-backlog_task.dto';
import { UpdateBacklogTaskDto } from './dto/update-backlog_task.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('backlog-task')
@Controller('backlog-task')
export class BacklogTaskController {
  constructor(private readonly backlogTaskService: BacklogTaskService) {}

  @Post()
  create(@Body() createBacklogTaskDto: CreateBacklogTaskDto) {
    return this.backlogTaskService.create(createBacklogTaskDto);
  }

  @Get()
  findAll() {
    return this.backlogTaskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.backlogTaskService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBacklogTaskDto: UpdateBacklogTaskDto,
  ) {
    return this.backlogTaskService.update(+id, updateBacklogTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.backlogTaskService.remove(+id);
  }
}
