import { PartialType } from '@nestjs/swagger';
import { CreateBacklogSprintDto } from './create-backlog_sprint.dto';

export class UpdateBacklogSprintDto extends PartialType(CreateBacklogSprintDto) {}
