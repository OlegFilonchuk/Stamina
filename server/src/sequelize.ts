import { join } from 'path';
import { Sequelize } from 'sequelize-typescript';

const env = process.env.NODE_ENV || 'development';
const configPath = env === 'production'
    ? join(__dirname, 'config/config.json')
    : join(__dirname, 'config/config.json');
const config = require(configPath)[ env ];

export const sequelize = new Sequelize({
    database: config.database,
    dialect: config.dialect,
    username: config.username,
    password: config.password,
    models: [__dirname + '/models']
});
