import { BacklogEntity } from 'src/backlog/entities/backlog.entity';
import { CalendarEntity } from 'src/calendar/entities/calendar.entity';
import { KanbanEntity } from 'src/kanban/entities/kanban.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('workspace')
export class WorkspaceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToOne(() => KanbanEntity)
  @JoinColumn()
  kanban: KanbanEntity;

  @OneToOne(() => BacklogEntity)
  @JoinColumn()
  backlog: BacklogEntity;

  @OneToOne(() => CalendarEntity)
  @JoinColumn()
  calendar: CalendarEntity;

  @Column('simple-array')
  members: number[];

  @Column()
  ownerId: number;
}
