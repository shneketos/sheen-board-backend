import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('board_cards')
export class BoardCardsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  desc: string;

  @Column()
  dateCreated: string;

  @Column()
  priority: string;

  @Column('simple-array')
  members: string[];
}
