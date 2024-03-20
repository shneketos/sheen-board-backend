import { Injectable } from '@nestjs/common';
import { KanbanEntity } from './entities/kanban.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class KanbanService {
  constructor(
    @InjectRepository(KanbanEntity)
    private repository: Repository<KanbanEntity>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository
      .createQueryBuilder('kanban')
      .leftJoinAndSelect('kanban.lists', 'lists')
      .leftJoinAndSelect('lists.tasks', 'tasks')
      .where('kanban.id = :id', { id })
      .getOne();
  }
}
