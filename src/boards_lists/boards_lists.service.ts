import { Injectable } from '@nestjs/common';
import { CreateBoardsListDto } from './dto/create-boards_list.dto';
import { UpdateBoardsListDto } from './dto/update-boards_list.dto';

@Injectable()
export class BoardsListsService {
  create(createBoardsListDto: CreateBoardsListDto) {
    return 'This action adds a new boardsList';
  }

  findAll() {
    return `This action returns all boardsLists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boardsList`;
  }

  update(id: number, updateBoardsListDto: UpdateBoardsListDto) {
    return `This action updates a #${id} boardsList`;
  }

  remove(id: number) {
    return `This action removes a #${id} boardsList`;
  }
}
