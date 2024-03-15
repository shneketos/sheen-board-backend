import { Injectable } from '@nestjs/common';
import { CreateKanbanListDto } from './dto/create-kanban_list.dto';
import { UpdateKanbanListDto } from './dto/update-kanban_list.dto';

@Injectable()
export class KanbanListService {
  create(createKanbanListDto: CreateKanbanListDto) {
    return 'This action adds a new kanbanList';
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
    return `This action removes a #${id} kanbanList`;
  }
}
