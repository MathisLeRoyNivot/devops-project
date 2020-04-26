import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('data')
export class Data {
    @PrimaryGeneratedColumn()
    id: any;

    @Column("int")
    unit_num: number;

    @Column("int")
    automaton_num: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    automaton_type: string;

    @Column("float")
    tank_temp: number;

    @Column("float")
    outside_temp: number;

    @Column("float")
    milk_weight: number;

    @Column("float")
    final_product_weight: number;

    @Column("float")
    ph: number;

    @Column("int")
    potassium: number;

    @Column("float")
    sodium_chlorure_concentration: number;

    @Column("int")
    salmonella_lvl: number;

    @Column("int")
    e_coli_lvl: number;

    @Column("int")
    listeria_lvl: number;

    @Column('timestamp') 
    created_at: Date;
}
