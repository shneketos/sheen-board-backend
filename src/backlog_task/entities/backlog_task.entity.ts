import { BacklogSprintEntity } from 'src/backlog_sprint/entities/backlog_sprint.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('backlog_task')
export class BacklogTaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  priority: string;

  @Column()
  story: number;

  @Column()
  status: string;

  @ManyToOne(() => BacklogSprintEntity, (sprint) => sprint.tasks)
  sprint: BacklogSprintEntity;
}
