import { Injectable } from '@nestjs/common';
import { CreateKanbanListDto } from './dto/create-kanban_list.dto';
import { UpdateKanbanListDto } from './dto/update-kanban_list.dto';
import { KanbanListEntity } from './entities/kanban_list.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class KanbanListService {
  constructor(
    @InjectRepository(KanbanListEntity)
    private repository: Repository<KanbanListEntity>,
  ) {}
  create(dto: CreateKanbanListDto): Promise<KanbanListEntity> {
    const { title, kanbanId } = dto;

    const newList = new KanbanListEntity();
    newList.title = title;

    newList.kanban = { id: kanbanId } as any;

    return this.repository.save(newList);
  }

  findAll() {
    return `This action returns all kanbanList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kanbanList`;
  }

  update(id: number, updateKanbanListDto: UpdateKanbanListDto) {
    return `This action updates a #${id} kanbanList`;
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
