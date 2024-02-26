const User = require('../Model/user');

exports.one = (req, res, next) => {
    User.findOne({ where: { username: req.params.username } })
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }

      // Augmentez le nombre de points de l'utilisateur de 1
      user.pts += 1;

      // Sauvegardez les modifications dans la base de données
      return user.save();
    })
    .then(() => res.status(200).json({ message: 'Point ajouté !' }))
    .catch(error => {
      console.error('Erreur:', error);
      return res.status(500).json({ error: 'Erreur lors de l\'ajout de points' });
    });
}
exports.ten = (req, res, next) => {
  User.findOne({ where: { username: req.params.username } })
  .then(user => {
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    // Augmentez le nombre de points de l'utilisateur de 1
    user.pts += 10;

    // Sauvegardez les modifications dans la base de données
    return user.save();
  })
  .then(() => res.status(200).json({ message: 'Point ajouté !' }))
  .catch(error => {
    console.error('Erreur:', error);
    return res.status(500).json({ error: 'Erreur lors de l\'ajout de points' });
  });
}

exports.hundred = (req, res, next) => {
  User.findOne({ where: { username: req.params.username } })
  .then(user => {
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    // Augmentez le nombre de points de l'utilisateur de 1
    user.pts += 100;

    // Sauvegardez les modifications dans la base de données
    return user.save();
  })
  .then(() => res.status(200).json({ message: 'Point ajouté !' }))
  .catch(error => {
    console.error('Erreur:', error);
    return res.status(500).json({ error: 'Erreur lors de l\'ajout de points' });
  });
}