import { Injectable } from '@nestjs/common';
import { CreateKanbanTaskDto } from './dto/create-kanban_task.dto';
import { UpdateKanbanTaskDto } from './dto/update-kanban_task.dto';

@Injectable()
export class KanbanTasksService {
  create(createKanbanTaskDto: CreateKanbanTaskDto) {
    return 'This action adds a new kanbanTask';
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
    return `This action removes a #${id} kanbanTask`;
  }
}
