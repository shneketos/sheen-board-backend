import { Injectable } from '@nestjs/common';
import { CreateBacklogTaskDto } from './dto/create-backlog_task.dto';
import { UpdateBacklogTaskDto } from './dto/update-backlog_task.dto';

@Injectable()
export class BacklogTaskService {
  create(createBacklogTaskDto: CreateBacklogTaskDto) {
    return 'This action adds a new backlogTask';
  }

  findAll() {
    return `This action returns all backlogTask`;
  }

  findOne(id: number) {
    return `This action returns a #${id} backlogTask`;
  }

  update(id: number, updateBacklogTaskDto: UpdateBacklogTaskDto) {
    return `This action updates a #${id} backlogTask`;
  }

  remove(id: number) {
    return `This action removes a #${id} backlogTask`;
  }
}
