import { App } from './app';
import { sequelize } from './sequelize';

const app = new App().app;

const PORT = process.env.PORT || 3000;

(async () => {
   await sequelize.sync();
   app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
   });
})();
