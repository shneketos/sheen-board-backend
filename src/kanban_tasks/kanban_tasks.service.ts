import { Injectable } from '@nestjs/common';
import { CreateKanbanTaskDto } from './dto/create-kanban_task.dto';
import { UpdateKanbanTaskDto } from './dto/update-kanban_task.dto';
import { KanbanTaskEntity } from './entities/kanban_task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class KanbanTasksService {
  constructor(
    @InjectRepository(KanbanTaskEntity)
    private repository: Repository<KanbanTaskEntity>,
  ) {}
  create(dto: CreateKanbanTaskDto): Promise<KanbanTaskEntity> {
    const { title, stage, priority, desc, date, listId } = dto;
    const newTask = new KanbanTaskEntity();
    newTask.title = title;
    newTask.stage = stage;
    newTask.priority = priority;
    newTask.desc = desc;
    newTask.date = date;
    newTask.list = { id: listId } as any;
    return this.repository.save(newTask);
  }

  findAll() {
    return `This action returns all kanbanTasks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kanbanTask`;
  }

  update(id: number, updateKanbanTaskDto: UpdateKanbanTaskDto) {
    return `This action updates a #${id} kanbanTask`;
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
