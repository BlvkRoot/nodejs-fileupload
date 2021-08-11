import { getCustomRepository, Repository } from 'typeorm';
import { Files } from '../entities/Files';
import { FilesRepository } from '../repositories/FilesRepository';

interface IFiles {
    filename: string,
    mime: string,
    imageBase64: string
}


class FilesService {
    private filesRepository: Repository<Files>;

    constructor() {
        this.filesRepository = getCustomRepository(FilesRepository);
    }

    create = async ({ filename, mime, imageBase64 } : IFiles) => {
        const file = this.filesRepository.create({ filename, mime, imageBase64});

        try {
            await this.filesRepository.save(file);

            return file;
        } catch ({message}) {
            throw new Error(message);
        }
    }
}

export { FilesService }