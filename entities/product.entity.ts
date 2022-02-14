import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./tag.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id_producto: number;

  @Column({ length: 50 })
  nombre: string;

  @OneToMany(() => Tag, (tag) => tag.producto)
  etiquetas: Tag[];
}
