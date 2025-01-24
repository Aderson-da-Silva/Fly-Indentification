import { Entity, Column, PrimaryColumn, BeforeInsert, ManyToMany, JoinTable } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import * as crypto from 'crypto';
import { FlyCharacteristic } from 'src/modules/fly-characteristics/entities/fly-characteristic.entity';

@Entity()
export class FlyGenus {
  @PrimaryColumn()
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ unique: false, nullable: true })
  description: string;

  @ManyToMany(() => FlyCharacteristic, flyCharacteristic => flyCharacteristic.flyGenus)
  @JoinTable()
  flyCharacteristic: FlyCharacteristic[];

  @BeforeInsert()
  genereteId() {
    const timestamp: string = Date.now().toString()
    const hash: string = crypto.createHash('sha256').update(uuidv4()+timestamp).digest('hex')
    this.id = hash
  }
}