import { Injectable } from '@nestjs/common';
import { CreateKanbanDto } from './dto/create-kanban.dto';
import { UpdateKanbanDto } from './dto/update-kanban.dto';
import { KanbanEntity } from './entities/kanban.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class KanbanService {
  constructor(
    @InjectRepository(KanbanEntity)
    private repository: Repository<KanbanEntity>,
  ) {}

  create(createKanbanDto: CreateKanbanDto) {
    return 'This action adds a new kanban';
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository
      .createQueryBuilder('kanban')
      .where('kanban.id = :id', { id })
      .getOne();
  }

  update(id: number, updateKanbanDto: UpdateKanbanDto) {
    return `This action updates a #${id} kanban`;
  }

  remove(id: number) {
    return `This action removes a #${id} kanban`;
  }
}
