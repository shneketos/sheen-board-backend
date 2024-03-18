import { CalendarEntity } from 'src/calendar/entities/calendar.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('calendar-event')
export class CalendarEventEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  desc: string;

  @Column()
  start: Date;

  @Column()
  end: Date;

  @Column()
  color: string;

  @Column()
  allDay: boolean;

  @ManyToOne(() => CalendarEntity, (calendar) => calendar.events)
  calendar: CalendarEntity;
}
