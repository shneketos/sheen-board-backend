import { CalendarEventEntity } from 'src/calendar_events/entities/calendar_event.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('calendar')
export class CalendarEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => CalendarEventEntity, (event) => event.calendar)
  events: CalendarEventEntity[];
}
