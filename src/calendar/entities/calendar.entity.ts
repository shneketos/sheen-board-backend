import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('calendar')
export class CalendarEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
