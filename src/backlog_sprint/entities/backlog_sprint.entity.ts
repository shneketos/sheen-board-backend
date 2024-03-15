import { BacklogEntity } from 'src/backlog/entities/backlog.entity';
import { BacklogTaskEntity } from 'src/backlog_task/entities/backlog_task.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('backlog_sprint')
export class BacklogSprintEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => BacklogEntity, (backlog) => backlog.sprints)
  backlog: BacklogEntity;

  @OneToMany(() => BacklogTaskEntity, (task) => task.sprint)
  tasks: BacklogTaskEntity[];
}
