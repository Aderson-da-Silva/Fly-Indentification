import { Entity, Column, PrimaryColumn, BeforeInsert, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import * as crypto from 'crypto';
import { FlyCharacteristic } from '../../fly-characteristics/entities/fly-characteristic.entity';
import { FlySpecie } from '../../fly-species/entities/fly-specie.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class FlyGenus {
  @PrimaryColumn()
  @ApiProperty({ example: '1', description: 'The unique identifier of the genus' })
  id: string;

  @Column({ unique: true })
  @ApiProperty({ example: 'Drosophila', description: 'The name of the genus' })
  name: string;

  @Column({ unique: false, nullable: true })
  @ApiProperty({ example: 'A genus of small flies', description: 'The description of the genus', required: false })
  description: string;

  @ManyToMany(() => FlyCharacteristic, flyCharacteristic => flyCharacteristic.flyGenus)
  @JoinTable()
  @ApiProperty({ type: [FlyCharacteristic], description: 'The characteristics of the genus', required: false })
  flyCharacteristics: FlyCharacteristic[];

  @OneToMany(() => FlySpecie, flySpecie => flySpecie.genus)
  @ApiProperty({ type: [FlySpecie], description: 'The species of the genus', required: false })
  flySpecies: FlySpecie[];

  @BeforeInsert()
  generateId() {
    const timestamp: string = Date.now().toString();
    const hash: string = crypto.createHash('sha256').update(uuidv4() + timestamp).digest('hex');
    this.id = hash;
  }
}