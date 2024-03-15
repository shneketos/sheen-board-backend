import { PartialType } from '@nestjs/swagger';
import { CreateKanbanListDto } from './create-kanban_list.dto';

export class UpdateKanbanListDto extends PartialType(CreateKanbanListDto) {}
