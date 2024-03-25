import { PartialType } from '@nestjs/swagger';
import { CreateCalendarEventDto } from './create-calendar_event.dto';

export class UpdateCalendarEventDto extends PartialType(
  CreateCalendarEventDto,
) {}
