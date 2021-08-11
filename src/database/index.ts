import { createConnection } from 'typeorm';

createConnection()
    .then(dbConnection => console.log('BD conectada com sucesso.', dbConnection))
    .catch(({sqlMessage}) => console.log('Falha ao conectar na BD: ', sqlMessage));