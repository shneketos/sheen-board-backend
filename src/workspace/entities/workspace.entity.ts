import { BacklogEntity } from 'src/backlog/entities/backlog.entity';
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
  title: string;

  @OneToOne(() => KanbanEntity)
  @JoinColumn()
  kanban: KanbanEntity;

  @OneToOne(() => BacklogEntity)
  @JoinColumn()
  backlog: BacklogEntity;

  @Column('simple-array')
  members: number[];

  @Column()
  ownerId: number;
}
