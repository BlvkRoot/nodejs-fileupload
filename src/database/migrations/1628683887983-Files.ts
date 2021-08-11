import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Files1628683887983 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'files',
            columns: [{
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "filename",
                        type: "varchar",
                    },
                    {
                        name: "mime",
                        type: "varchar",
                    },
                    {
                        name: "imageBase64",
                        type: "varchar(20000)"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('files');
    }

}
