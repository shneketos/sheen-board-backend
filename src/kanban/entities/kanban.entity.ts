import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { KanbanListEntity } from 'src/kanban_list/entities/kanban_list.entity';

@Entity('kanban')
export class KanbanEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => KanbanListEntity, (list) => list.kanban)
  lists: KanbanListEntity[];
}
