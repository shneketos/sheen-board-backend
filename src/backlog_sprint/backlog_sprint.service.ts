import { Injectable } from '@nestjs/common';
import { CreateBacklogSprintDto } from './dto/create-backlog_sprint.dto';
import { UpdateBacklogSprintDto } from './dto/update-backlog_sprint.dto';

@Injectable()
export class BacklogSprintService {
  create(createBacklogSprintDto: CreateBacklogSprintDto) {
    return 'This action adds a new backlogSprint';
  }

  findAll() {
    return `This action returns all backlogSprint`;
  }

  findOne(id: number) {
    return `This action returns a #${id} backlogSprint`;
  }

  update(id: number, updateBacklogSprintDto: UpdateBacklogSprintDto) {
    return `This action updates a #${id} backlogSprint`;
  }

  remove(id: number) {
    return `This action removes a #${id} backlogSprint`;
  }
}
