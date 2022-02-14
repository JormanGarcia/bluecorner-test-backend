import { DeepPartial, Repository } from "typeorm";

export class CustomRepository<IEntity> extends Repository<IEntity> {
  async createAndSave(item: DeepPartial<IEntity>) {
    const newItem = this.create(item);
    await this.save(newItem);
    return newItem;
  }
}
