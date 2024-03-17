import { BacklogSprintEntity } from 'src/backlog_sprint/entities/backlog_sprint.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('backlog')
export class BacklogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => BacklogSprintEntity, (sprint) => sprint.backlog)
  sprints: BacklogSprintEntity[];
}
