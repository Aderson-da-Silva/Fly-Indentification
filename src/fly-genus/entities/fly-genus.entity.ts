import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class FlyGenus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;
}