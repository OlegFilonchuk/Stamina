import {Table, Column, Model, CreatedAt, UpdatedAt, DeletedAt, AllowNull} from 'sequelize-typescript';

@Table({modelName: 'Users'})
export class User extends Model<User> {

    @AllowNull(false)
    @Column
    name: string;

    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedOn: Date;

    @DeletedAt
    deletionDate: Date;
}