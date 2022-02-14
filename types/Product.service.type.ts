import Product from "../entities/product.entity";

export type CreateProductProps = Omit<Product, "id_producto" | "etiquetas">;

export type CreateProductResult = {
  ok: boolean;
  product: Product;
};
export type DeletedProductResult = {
  ok: boolean;
};

export interface IProductService {
  create: (props: CreateProductProps) => Promise<CreateProductResult>;
  findAll: () => Promise<Product[]>;
  delete: (id: number) => Promise<DeletedProductResult>;
}
