import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateKanbanTaskDto } from './dto/create-kanban_task.dto';
import { UpdateKanbanTaskDto } from './dto/update-kanban_task.dto';
import { KanbanTaskEntity } from './entities/kanban_task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KanbanListEntity } from 'src/kanban_list/entities/kanban_list.entity';

@Injectable()
export class KanbanTasksService {
  constructor(
    @InjectRepository(KanbanTaskEntity)
    private repository: Repository<KanbanTaskEntity>,
    @InjectRepository(KanbanListEntity)
    private readonly listRepository: Repository<KanbanListEntity>,
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

  update(
    id: number,
    updateKanbanTaskDto: UpdateKanbanTaskDto,
  ): Promise<KanbanTaskEntity> {
    return this.repository.findOneBy({ id }).then((task) => {
      if (!task) {
        throw new NotFoundException(`Task with id ${id} not found.`);
      }

      task.title = updateKanbanTaskDto.title;
      task.stage = updateKanbanTaskDto.stage;
      task.priority = updateKanbanTaskDto.priority;
      task.desc = updateKanbanTaskDto.desc;
      task.date = updateKanbanTaskDto.date;

      if (updateKanbanTaskDto.listId) {
        return this.getListById(updateKanbanTaskDto.listId).then((list) => {
          if (!list) {
            throw new NotFoundException(
              `List with id ${updateKanbanTaskDto.listId} not found.`,
            );
          }
          task.list = list;
          return this.repository.save(task);
        });
      } else {
        return this.repository.save(task);
      }
    });
  }
  private getListById(id: number): Promise<KanbanListEntity | undefined> {
    return this.listRepository.findOneBy({ id });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
