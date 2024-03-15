import { PartialType } from '@nestjs/swagger';
import { CreateKanbanTaskDto } from './create-kanban_task.dto';

export class UpdateKanbanTaskDto extends PartialType(CreateKanbanTaskDto) {}
