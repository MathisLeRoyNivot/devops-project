import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Data {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 10})
    numero_unite: number;

    @Column({ length: 10})
    numero_automate: number;

    @Column({ length: 10})
    type_automate: number;

    @Column()
    temperature_cuve: number;

    @Column()
    temperature_exterieur: number;

    @Column()
    poids_lait_cuve: number;

    @Column()
    poids_produit_fini: number;

    @Column({ length: 10})
    mesure_pH: number;

    @Column()
    'mesure_K+': number;

    @Column()
    concentration_NaCl: number;

    @Column({ length: 10})
    niveau_bacterien_salmonelle: number;

    @Column({ length: 10})
    'niveau_bacterien_E-coli': number;

    @Column({ length: 10})
    niveau_bacterien_Listeria: number;

    @Column('date') 
    timestamp:Date;
}
