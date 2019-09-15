import { join } from 'path';
import { Sequelize } from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const configPath = env === 'production'
    ? join(__dirname, '..', '..', '..', 'src/config/config.json')
    : join(__dirname, '..', '..', 'src/config/config.json');
const config = require(configPath)[ env ];

export const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    operatorsAliases: config.operatorsAliases
});

// export const models = {
//     User: sequelize.import('./User.ts')
// };
// Object.keys(models).forEach(key => {
//     if ('associate' in models[key]) {
//         models[key].associate(models);
//     }
// });
