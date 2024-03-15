import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { KanbanTaskEntity } from 'src/kanban_tasks/entities/kanban_task.entity';
import { KanbanEntity } from 'src/kanban/entities/kanban.entity';

@Entity('kanban_list')
export class KanbanListEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => KanbanEntity, (kanban) => kanban.lists)
  kanban: KanbanEntity;

  @OneToMany(() => KanbanTaskEntity, (task) => task.list)
  tasks: KanbanTaskEntity[];
}
