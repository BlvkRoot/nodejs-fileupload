import { getCustomRepository, Repository } from 'typeorm';
import { Files } from '../entities/Files';
import { FilesRepository } from '../repositories/FilesRepository';

interface IFiles {
    filename: string,
    mime: string
}


class FilesService {
    private filesRepository: Repository<Files>;

    constructor() {
        this.filesRepository = getCustomRepository(FilesRepository);
    }

    create = async ({ filename, mime } : IFiles) => {
        const file = this.filesRepository.create({ filename, mime});

        await this.filesRepository.save(file);

        return file;
    }
}

export { FilesService }