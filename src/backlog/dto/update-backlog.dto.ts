import { PartialType } from '@nestjs/swagger';
import { CreateBacklogDto } from './create-backlog.dto';

export class UpdateBacklogDto extends PartialType(CreateBacklogDto) {}
