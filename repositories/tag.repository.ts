import { EntityRepository, getCustomRepository } from "typeorm";
import { Tag } from "../entities/tag.entity";
import { CustomRepository } from "./custom.repository";

@EntityRepository(Tag)
export class TagRepo extends CustomRepository<Tag> {}

export const TagRepository = () => getCustomRepository(TagRepo);
