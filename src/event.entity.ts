import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  when: Date;

  @Column()
  address: string;
}
