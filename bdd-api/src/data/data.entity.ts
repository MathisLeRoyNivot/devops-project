import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Data {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    unit_num: number;

    @Column()
    automaton_num: number;

    @Column()
    automaton_type: number;

    @Column()
    tank_temp: number;

    @Column()
    outside_temp: number;

    @Column()
    milk_weight: number;

    @Column()
    final_product_weight: number;

    @Column()
    ph: number;

    @Column()
    potassium: number;

    @Column()
    sodium_chlorure_concentration: number;

    @Column()
    salmonella_lvl: number;

    @Column()
    e_coli_lvl: number;

    @Column()
    listeria_lvl: number;

    @Column('date') 
    created_at:Date;
}
