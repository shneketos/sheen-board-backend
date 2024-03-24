import { Injectable, NotFoundException } from '@nestjs/common';
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

  async update(
    id: number,
    updateKanbanTaskDto: UpdateKanbanTaskDto,
  ): Promise<KanbanTaskEntity> {
    const task = await this.repository.findOneBy({ id });

    if (!task) {
      throw new NotFoundException(`TASK with id ${id} not found.`);
    }
    Object.assign(task, updateKanbanTaskDto);

    return this.repository.save(task);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
