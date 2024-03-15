import { Injectable } from '@nestjs/common';
import { CreateBacklogDto } from './dto/create-backlog.dto';
import { UpdateBacklogDto } from './dto/update-backlog.dto';

@Injectable()
export class BacklogService {
  create(createBacklogDto: CreateBacklogDto) {
    return 'This action adds a new backlog';
  }

  findAll() {
    return `This action returns all backlog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} backlog`;
  }

  update(id: number, updateBacklogDto: UpdateBacklogDto) {
    return `This action updates a #${id} backlog`;
  }

  remove(id: number) {
    return `This action removes a #${id} backlog`;
  }
}
