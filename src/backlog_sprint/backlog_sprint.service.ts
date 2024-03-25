import { Injectable } from '@nestjs/common';
import { CreateBacklogSprintDto } from './dto/create-backlog_sprint.dto';
import { UpdateBacklogSprintDto } from './dto/update-backlog_sprint.dto';
import { BacklogSprintEntity } from './entities/backlog_sprint.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BacklogTaskEntity } from 'src/backlog_task/entities/backlog_task.entity';

@Injectable()
export class BacklogSprintService {
  constructor(
    @InjectRepository(BacklogSprintEntity)
    private repository: Repository<BacklogSprintEntity>,
  ) {}
  create(dto: CreateBacklogSprintDto): Promise<BacklogSprintEntity> {
    const { title, backlogId } = dto;

    const newList = new BacklogSprintEntity();
    newList.title = title;

    newList.backlog = { id: backlogId } as any;

    return this.repository.save(newList);
  }

  findAll() {
    return this.repository.find();
  }

  update(id: number, updateBacklogSprintDto: UpdateBacklogSprintDto) {
    return `This action updates a #${id} backlogSprint`;
  }

  remove(id: number) {
    return this.repository.manager.transaction((manager) => {
      return manager
        .delete(BacklogTaskEntity, { sprint: { id } })
        .then(() => manager.delete(BacklogSprintEntity, id));
    });
  }
}
