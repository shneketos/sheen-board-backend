import { ApiProperty } from '@nestjs/swagger';
import { BacklogEntity } from 'src/backlog/entities/backlog.entity';
import { CalendarEntity } from 'src/calendar/entities/calendar.entity';
import { KanbanEntity } from 'src/kanban/entities/kanban.entity';
export class CreateWorkspaceDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  ownerId: number;

  @ApiProperty()
  members: number[];

  @ApiProperty({ required: false })
  kanban?: Partial<KanbanEntity>;

  @ApiProperty({ required: false })
  backlog?: Partial<BacklogEntity>;

  @ApiProperty({ required: false })
  calendar?: Partial<CalendarEntity>;
}
