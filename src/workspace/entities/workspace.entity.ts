import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('worskpace')
export class WorkspaceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('simple-array')
  boards: string[];

  @Column('simple-array')
  backlog: string[];

  @Column('simple-array')
  roadmap: string[];

  @Column('simple-array')
  members: number[];

  @Column()
  ownerId: number;
}
