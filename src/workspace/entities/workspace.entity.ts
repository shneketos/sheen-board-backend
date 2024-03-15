import { KanbanEntity } from 'src/kanban/entities/kanban.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('worskpace')
export class WorkspaceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => KanbanEntity)
  @JoinColumn()
  kanban: KanbanEntity;

  @Column('simple-array')
  backlog: string[];

  @Column('simple-array')
  members: number[];

  @Column('simple-array')
  calendar: string[];

  @Column()
  ownerId: number;
}
