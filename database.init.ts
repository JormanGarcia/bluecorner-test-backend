import { createConnection } from "typeorm";

// ** Entities **
import { Product } from "./entities/product.entity";
import { Tag } from "./entities/tag.entity";

const DatabaseConnection = async () => {
  const connection = await createConnection({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT!),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [Product, Tag],
  });
  await connection.synchronize();
};

export default DatabaseConnection;
