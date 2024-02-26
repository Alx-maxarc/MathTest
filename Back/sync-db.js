// sync-db.js

const sequelize = require('./bdd');
const User = require('./Model/user');

// Synchroniser les modèles avec la base de données
sequelize.sync({ force: false })
  .then(() => {
    console.log('Base de données synchronisée avec succès');
  })
  .catch((error) => {
    console.error('Erreur lors de la synchronisation de la base de données:', error);
  });
