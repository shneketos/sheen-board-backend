import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BoardsListsService } from './boards_lists.service';
import { CreateBoardsListDto } from './dto/create-boards_list.dto';
import { UpdateBoardsListDto } from './dto/update-boards_list.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('boards-lists')
@ApiTags('boards_lists')
export class BoardsListsController {
  constructor(private readonly boardsListsService: BoardsListsService) {}

  @Post()
  create(@Body() createBoardsListDto: CreateBoardsListDto) {
    return this.boardsListsService.create(createBoardsListDto);
  }

  @Get()
  findAll() {
    return this.boardsListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardsListsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBoardsListDto: UpdateBoardsListDto,
  ) {
    return this.boardsListsService.update(+id, updateBoardsListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardsListsService.remove(+id);
  }
}
