import { EntityRepository, getCustomRepository } from "typeorm";
import { Product } from "../entities/product.entity";
import { CustomRepository } from "./custom.repository";

@EntityRepository(Product)
export class ProductRepo extends CustomRepository<Product> {}

export const ProductRepository = () => getCustomRepository(ProductRepo);
