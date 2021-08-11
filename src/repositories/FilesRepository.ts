import { EntityRepository, Repository } from "typeorm";
import { Files } from "../entities/Files";

@EntityRepository(Files)
class FilesRepository extends Repository<Files> {}

export { FilesRepository }