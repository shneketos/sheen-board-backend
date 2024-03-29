import { Injectable } from '@nestjs/common';
import { UpdateBacklogDto } from './dto/update-backlog.dto';
import { BacklogEntity } from './entities/backlog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BacklogService {
  constructor(
    @InjectRepository(BacklogEntity)
    private repository: Repository<BacklogEntity>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository
      .createQueryBuilder('backlog')
      .leftJoinAndSelect('backlog.sprints', 'sprints')
      .leftJoinAndSelect('sprints.tasks', 'tasks')
      .where('backlog.id = :id', { id })
      .getOne();
  }

  update(id: number, updateBacklogDto: UpdateBacklogDto) {
    return `This action updates a #${id} backlog`;
  }
}
