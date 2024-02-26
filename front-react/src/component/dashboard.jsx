import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useUserData } from './contexte/userData';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { AppBar, Card,  Toolbar } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';

export default function Dashboard (props) {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem("token");
    const { userData, setUserData } = useUserData();
    
    setUserData(props.id)
    console.log(userData)
  
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await fetch(`http://localhost:3001/api/user/user/${props.id}`, {
          headers: {
          'Authorization': `Bearer ${token}`
          }
          });

          if (!response.ok) {
            throw new Error('Erreur lors de la récupération de l\'utilisateur');
          }
  
          const userData = await response.json();
          setUser(userData);
          setLoading(false);
          
        } catch (error) {
          console.error('Erreur:', error);
          setLoading(false);
        }
      };
  
      fetchUser();
    }, [props.id]);
setUserData(user.username)
return (
<>
<AppBar position="relative">
<Toolbar>
  <Typography variant="h6" color="inherit" noWrap>
  <Link to='niveau-simple' style={{color: "white", textDecoration: "none"}} className="display-full-text">
         Niveau Simple <StarBorderIcon/> 
      </Link>  
      <Link to='niveau-simple' style={{color: "white", textDecoration: "none"}} className="display-icons-only">
         <StarBorderIcon/>  
      </Link>

      <Link to='niveau-moyen' style={{color: "white", textDecoration: "none"}} className="display-full-text">
           Niveau Intermediaire <StarHalfIcon/> 
      </Link>  
      <Link to='niveau-moyen' style={{color: "white", textDecoration: "none"}} className="display-icons-only">
         <StarHalfIcon/>  
      </Link>

      <Link to='niveau-difficile' style={{color: "white", textDecoration: "none"}} className="display-full-text">
           Niveau Hard <StarIcon/>  
      </Link>  
      <Link to='niveau-difficile' style={{color: "white", textDecoration: "none"}} className="display-icons-only">
         <StarIcon/> 
      </Link>
  </Typography>
  </Toolbar>
</AppBar>
<main>
{/* Hero unit */}
<Box
  sx={{
    bgcolor: 'background.paper',
    pt: 8,
    pb: 6,
  }}
>Additionne les 7 chiffres et gagne des points. 
  <Container maxWidth="sm">
    <Typography
      component="h1"
      variant="h2"
      align="center"
      color="text.primary"
      gutterBottom
    >
      {user?.username || 'Chargement en cours...'}   {user?.pts || ''}
    </Typography>
    <Typography variant="h5" align="center" color="text.secondary" paragraph>
      Test des compétences en calcul mental, gagne le plus de point possible et deviens le meilleur.
    </Typography>
    <Card
      sx={{ pt: 4 }}
      direction="row"
      spacing={2}
      justifyContent="center"
      padding="5px"
    ><Outlet/>
    </Card>
  </Container>
</Box>
<Container sx={{ py: 8 }} maxWidth="md">
  {/* End hero unit */}
  <Grid container spacing={4}>
    
  </Grid>
</Container>
</main>
{/* Footer */}
<Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">

<Typography
  variant="subtitle1"
  align="center"
  color="text.secondary"
  component="p"
>
  Une application web conçu par moi-même pour faire du calcul mental.
</Typography>
</Box>
</>
)}
