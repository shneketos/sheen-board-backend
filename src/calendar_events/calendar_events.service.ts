import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCalendarEventDto } from './dto/create-calendar_event.dto';
import { UpdateCalendarEventDto } from './dto/update-calendar_event.dto';
import { CalendarEventEntity } from './entities/calendar_event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CalendarEventsService {
  constructor(
    @InjectRepository(CalendarEventEntity)
    private repository: Repository<CalendarEventEntity>,
  ) {}
  create(dto: CreateCalendarEventDto): Promise<CalendarEventEntity> {
    const { title, desc, color, start, end, calendarId, allDay } = dto;
    const newTask = new CalendarEventEntity();
    newTask.title = title;
    newTask.desc = desc;
    newTask.color = color;
    newTask.start = start;
    newTask.end = end;
    newTask.allDay = allDay;
    newTask.calendar = { id: calendarId } as any;
    return this.repository.save(newTask);
  }

  async update(id: number, updateCalendarEventDto: UpdateCalendarEventDto) {
    const list = await this.repository.findOneBy({ id });

    if (!list) {
      throw new NotFoundException(`list with id ${id} not found.`);
    }
    Object.assign(list, updateCalendarEventDto);

    return this.repository.save(list);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
