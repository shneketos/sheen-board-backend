import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { KanbanListEntity } from 'src/kanban_list/entities/kanban_list.entity';

@Entity('kanban_task')
export class KanbanTaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  stage: string;

  @Column()
  priority: string;

  @Column()
  desc: string;

  @Column()
  date: Date;

  @ManyToOne(() => KanbanListEntity, (list) => list.tasks)
  list: KanbanListEntity;
}
