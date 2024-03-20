import { Injectable } from '@nestjs/common';
import { CalendarEntity } from './entities/calendar.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CalendarService {
  constructor(
    @InjectRepository(CalendarEntity)
    private repository: Repository<CalendarEntity>,
  ) {}
  findOne(id: number) {
    return this.repository
      .createQueryBuilder('calendar')
      .leftJoinAndSelect('calendar.events', 'events')
      .where('calendar.id = :id', { id })
      .getOne();
  }
}
