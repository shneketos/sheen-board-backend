import { PartialType } from '@nestjs/swagger';
import { CreateBoardsCardDto } from './create-boards_card.dto';

export class UpdateBoardsCardDto extends PartialType(CreateBoardsCardDto) {}
