import { Controller, Get, Param } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('calendar')
@Controller('calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calendarService.findOne(+id);
  }
}
