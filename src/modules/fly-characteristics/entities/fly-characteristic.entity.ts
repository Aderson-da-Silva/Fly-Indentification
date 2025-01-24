import { BeforeInsert, Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import * as crypto from 'crypto';
import { FlyGenus } from "../../fly-genus/entities/fly-genus.entity";
import { FlySpecie } from "../../fly-species/entities/fly-specie.entity";


@Entity()
export class FlyCharacteristic {
    @PrimaryColumn()
    id: string

    @Column({unique: true})
    name: string

    @Column({unique: false, nullable: true})
    description: string

    @Column({unique: true, nullable: true})
    imageId: string
    
    @ManyToMany(() => FlyGenus, flyGenus => flyGenus.flyCharacteristics)
    flyGenus: FlyGenus[]

    @ManyToMany(() => FlySpecie, flySpecies => flySpecies.flyCharacteristics)
    flySpecies: FlySpecie[]


    @BeforeInsert()
    genereteId() {
        const timestamp = Date.now().toString()
        const hash = crypto.createHash('sha256').update(uuidv4() + timestamp).digest('hex')
        this.id = hash
    }

    generateImageId() {
        const timestamp: string = Date.now().toString()
        const hash: string = crypto.createHash('sha256').update(uuidv4() + timestamp).digest('hex')
        this.imageId = hash
    }
}
