import React, { useState } from 'react';
import axios from 'axios';
import SignUpForm from './subscribe';
import Dashboard from './dashboard';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const LogInForm = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleIdentifierChange = (e) => {
    setIdentifier(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/user/login', {
        email: identifier,
        password: password,
      });
      setAuthenticated(true);
      // Gérez la réponse de l'API ici, par exemple, stockez le token dans l'état global
      const { token } = response.data; 
      localStorage.setItem("token", token);    
    
    } catch (error) {
      console.error('Erreur lors de la connexion:', error.response.data);
    }

    // Réinitialisation des champs après l'envoi
    setPassword('');
  };

  return (
    <>
    {!authenticated && (
      <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleFormSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Votre email ou nom d'utilisateur"
                name="email"
                autoComplete="email"
                autoFocus
                value={identifier}
                onChange={handleIdentifierChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password} 
                onChange={handlePasswordChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Se connecter
              </Button>
                <Grid item>
                  <Link to='/enregistrement' variant="body2">
                    {"Vous n'avez pas de compte ? Inscrivez-vous"}
                  </Link>
                </Grid>
            </Box>
          </Box>
        </Container>
    )}
    {authenticated && (
      <Dashboard id={identifier}/>
    )}
    </>
  
  );
};

export default LogInForm;
