import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id_etiqueta: number;

  @ManyToOne(() => Product, (product) => product.etiquetas, {
    cascade: true,
    onDelete: "CASCADE",
  })
  producto: Product;

  @Column({ length: 50 })
  nombre: string;
}
