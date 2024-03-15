import { BacklogSprintEntity } from 'src/backlog_sprint/entities/backlog_sprint.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('backlog')
export class BacklogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => BacklogSprintEntity, (sprint) => sprint.backlog)
  sprints: BacklogSprintEntity[];
}
