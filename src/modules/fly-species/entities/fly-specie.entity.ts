import { BeforeInsert, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import * as crypto from 'crypto';
import { FlyGenus } from "../../fly-genus/entities/fly-genus.entity";
import { FlyCharacteristic } from "../../fly-characteristics/entities/fly-characteristic.entity";

@Entity()
export class FlySpecie {
    @PrimaryColumn()
    id: string;

    @Column({ unique: true })
    name: string

    @Column({ unique: false, nullable: true })
    description: string

    @ManyToMany(() => FlyCharacteristic, flyCharacteristic => flyCharacteristic.flySpecies)
    @JoinTable()
    flyCharacteristics: FlyCharacteristic[];

    @ManyToOne(() => FlyGenus, flyGenus => flyGenus.flySpecies)
    genus: FlyGenus;
   
    @BeforeInsert()
    genereteId() {
        const timestamp: string = Date.now().toString()
        const hash: string = crypto.createHash('sha256').update(uuidv4()+timestamp).digest('hex')
        this.id = hash
    }
}
