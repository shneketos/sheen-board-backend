import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBacklogTaskDto } from './dto/create-backlog_task.dto';
import { UpdateBacklogTaskDto } from './dto/update-backlog_task.dto';
import { BacklogTaskEntity } from './entities/backlog_task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BacklogTaskService {
  constructor(
    @InjectRepository(BacklogTaskEntity)
    private repository: Repository<BacklogTaskEntity>,
  ) {}
  create(dto: CreateBacklogTaskDto): Promise<BacklogTaskEntity> {
    const { title, priority, story, status, sprintId } = dto;
    const newTask = new BacklogTaskEntity();
    newTask.title = title;
    newTask.story = story;
    newTask.priority = priority;
    newTask.status = status;
    newTask.sprint = { id: sprintId } as any;
    return this.repository.save(newTask);
  }

  update(
    id: number,
    updateBacklogTaskDto: UpdateBacklogTaskDto,
  ): Promise<BacklogTaskEntity> {
    return this.repository.findOneBy({ id }).then((task) => {
      if (!task) {
        throw new NotFoundException(`Task with id ${id} not found.`);
      }

      Object.assign(task, updateBacklogTaskDto);

      return this.repository.save(task);
    });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
