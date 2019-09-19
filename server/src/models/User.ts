import {Table, Column, Model, CreatedAt, UpdatedAt, DeletedAt, AllowNull, Unique} from 'sequelize-typescript';

@Table({modelName: 'Users'})
export class User extends Model<User> {

    @AllowNull(false)
    @Column
    nickName: string;

    @AllowNull(false)
    @Unique
    @Column
    email: string;

    @AllowNull(false)
    @Column
    password: string;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;

    @DeletedAt
    deletedAt: Date;
}