import { Injectable } from '@nestjs/common';
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

  findAll() {
    return `This action returns all backlogTask`;
  }

  findOne(id: number) {
    return `This action returns a #${id} backlogTask`;
  }

  update(id: number, updateBacklogTaskDto: UpdateBacklogTaskDto) {
    return `This action updates a #${id} backlogTask`;
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
