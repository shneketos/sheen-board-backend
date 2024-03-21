import { Injectable } from '@nestjs/common';
import { CreateKanbanListDto } from './dto/create-kanban_list.dto';
import { UpdateKanbanListDto } from './dto/update-kanban_list.dto';
import { KanbanListEntity } from './entities/kanban_list.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KanbanTaskEntity } from 'src/kanban_tasks/entities/kanban_task.entity';

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

  update(id: number, updateKanbanListDto: UpdateKanbanListDto) {
    return `This action updates a #${id} kanbanList`;
  }
  removeCards(id: number) {
    this.repository.manager.transaction(async (manager) => {
      await manager.delete(KanbanTaskEntity, { list: { id } });
    });
  }
  remove(id: number) {
    this.repository.manager.transaction(async (manager) => {
      await manager.delete(KanbanTaskEntity, { list: { id } });
      await manager.delete(KanbanListEntity, id);
    });
  }
}
