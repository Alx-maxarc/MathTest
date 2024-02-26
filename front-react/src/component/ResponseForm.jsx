import React, { useState } from 'react';
import { useUserData } from './contexte/userData';
import { Box, Button, TextField } from '@mui/material';

export default function ResponseForm(props) {
  const [response, setResponse] = useState('');
  const token = localStorage.getItem("token");
  const { userData, setUserData } = useUserData();

  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.result == response) {
      fetch(`http://localhost:3001/api/pts/${props.niveau}/${userData}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          result: props.result,
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Réponse de l\'API:', data);
        })
        .catch(error => {
          console.error('Erreur de l\'API:', error);
        });

      alert('Bravo, vos points vont être ajoutés');
    } else {
      alert('Vous vous êtes trompé');
    }
    setResponse('');
    props.setFormSubmitted(true);
  };

  return (
    <>
        <form onSubmit={handleSubmit} style={{ margin: '30px' }}>
          <TextField
            id="number"
            label="Réponse ?"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            required
            variant="standard"
            value={response}
            onChange={handleResponseChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Valider
          </Button>
        </form>
    </>
  );
}
