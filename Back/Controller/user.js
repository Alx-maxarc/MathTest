const User = require('../Model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    console.log('Contenu de req.body :', req.body.email);

        bcrypt.hash(req.body.password, 10)
          .then((hashedPassword) => {
            const user = new User({
              email: req.body.email,
              username: req.body.username,
              password: hashedPassword,
            });
      
            user.save()
              .then(() => {
                res.status(201).json({ message: 'Utilisateur créé avec succès !' });
              })
              .catch((error) => {
                console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error);
                res.status(500).json({ error: 'Erreur lors de l\'enregistrement de l\'utilisateur' });
              });
          })
          .catch((error) => {
            console.error('Erreur lors du hachage du mot de passe :', error);
            res.status(500).json({ error: 'Erreur lors du hachage du mot de passe' });
          });
      };

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if (!user) {
            return res.status(401).json({ message: 'Paire login/mot de passe incorrecte 1'});
        }
        bcrypt.compare(req.body.password, user.password)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({ message: 'Paire login/mot de passe incorrecte 2' });
                }
                res.status(200).json({
                    userId: user.id,
                    token: jwt.sign(
                      { userId: user.id },
                      'TOKEN_KEY_SECRET',
                      { expiresIn: '1h' }
                  )
                });
            })
            .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.user = (req,res, next) => {
  User.findOne({ username: req.params.username })
  .then(user => res.status(200).json(user))
  .catch(error => res.status(404).json({ error }))
};