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

  async update(
    id: number,
    updateKanbanTaskDto: UpdateKanbanTaskDto,
  ): Promise<KanbanTaskEntity> {
    const task = await this.repository.findOneBy({ id });

    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found.`);
    }

    // Обновляем поля задачи
    task.title = updateKanbanTaskDto.title;
    task.stage = updateKanbanTaskDto.stage;
    task.priority = updateKanbanTaskDto.priority;
    task.desc = updateKanbanTaskDto.desc;
    task.date = updateKanbanTaskDto.date;

    // Проверяем, был ли передан новый идентификатор списка
    if (updateKanbanTaskDto.listId) {
      // Получаем список из базы данных
      const list = await this.getListById(updateKanbanTaskDto.listId);
      if (!list) {
        throw new NotFoundException(
          `List with id ${updateKanbanTaskDto.listId} not found.`,
        );
      }
      // Обновляем связь сущности KanbanTaskEntity с сущностью KanbanListEntity
      task.list = list;
    }

    return this.repository.save(task);
  }

  // Метод для получения списка по идентификатору
  private async getListById(id: number): Promise<KanbanListEntity | undefined> {
    return this.listRepository.findOneBy({ id });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
