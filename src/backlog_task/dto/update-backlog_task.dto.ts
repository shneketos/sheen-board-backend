import { PartialType } from '@nestjs/swagger';
import { CreateBacklogTaskDto } from './create-backlog_task.dto';

export class UpdateBacklogTaskDto extends PartialType(CreateBacklogTaskDto) {}
