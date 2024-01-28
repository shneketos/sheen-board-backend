import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BoardsCardsService } from './boards_cards.service';
import { CreateBoardsCardDto } from './dto/create-boards_card.dto';
import { UpdateBoardsCardDto } from './dto/update-boards_card.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('boards-cards')
@ApiTags('boards_cards')
export class BoardsCardsController {
  constructor(private readonly boardsCardsService: BoardsCardsService) {}

  @Post()
  create(@Body() createBoardsCardDto: CreateBoardsCardDto) {
    return this.boardsCardsService.create(createBoardsCardDto);
  }

  @Get()
  findAll() {
    return this.boardsCardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardsCardsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBoardsCardDto: UpdateBoardsCardDto,
  ) {
    return this.boardsCardsService.update(+id, updateBoardsCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardsCardsService.remove(+id);
  }
}
