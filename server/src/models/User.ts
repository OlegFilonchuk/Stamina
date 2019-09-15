import { Model, DataTypes } from 'sequelize';
import { sequelize } from './index';

export class User extends Model {
    public id!: number; // Note that the `null assertion` `!` is required in strict mode.
    public name!: string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    }
}, {
    tableName: 'Users',
    sequelize: sequelize, // this bit is important
});