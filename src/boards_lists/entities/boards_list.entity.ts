import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('board_lists')
export class BoardListsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('simple-array')
  lists: string[];
}
