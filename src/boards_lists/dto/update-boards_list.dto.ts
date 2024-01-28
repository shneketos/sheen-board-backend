import { PartialType } from '@nestjs/swagger';
import { CreateBoardsListDto } from './create-boards_list.dto';

export class UpdateBoardsListDto extends PartialType(CreateBoardsListDto) {}
