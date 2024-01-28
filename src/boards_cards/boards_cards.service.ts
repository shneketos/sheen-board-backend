import { Injectable } from '@nestjs/common';
import { CreateBoardsCardDto } from './dto/create-boards_card.dto';
import { UpdateBoardsCardDto } from './dto/update-boards_card.dto';

@Injectable()
export class BoardsCardsService {
  create(createBoardsCardDto: CreateBoardsCardDto) {
    return 'This action adds a new boardsCard';
  }

  findAll() {
    return `This action returns all boardsCards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boardsCard`;
  }

  update(id: number, updateBoardsCardDto: UpdateBoardsCardDto) {
    return `This action updates a #${id} boardsCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} boardsCard`;
  }
}
