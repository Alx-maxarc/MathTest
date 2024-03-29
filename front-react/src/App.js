import { Link } from 'react-router-dom';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function App() {
  


  return (
    <>
<AppBar position="relative">
<Toolbar>
  <CameraIcon sx={{ mr: 2 }} />
  <Typography variant="h6" color="inherit" noWrap>
    Album layout
  </Typography>
  <Link to='/enregistrement'>enregistrement</Link>
  <Link to='/moncompte'>Mon Compte</Link>
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
>
  <Container maxWidth="sm">
    <Typography
      component="h1"
      variant="h2"
      align="center"
      color="text.primary"
      gutterBottom
    >
      Album layout
    </Typography>
    <Typography variant="h5" align="center" color="text.secondary" paragraph>
      Something short and leading about the collection below—its contents,
      the creator, etc. Make it short and sweet, but not too short so folks
      don&apos;t simply skip over it entirely.
    </Typography>
    <Stack
      sx={{ pt: 4 }}
      direction="row"
      spacing={2}
      justifyContent="center"
    >
      <Button variant="contained">Main call to action</Button>
      <Button variant="outlined">Secondary action</Button>
    </Stack>
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
<Typography variant="h6" align="center" gutterBottom>
  Footer
</Typography>
<Typography
  variant="subtitle1"
  align="center"
  color="text.secondary"
  component="p"
>
  Something here to give the footer a purpose!
</Typography>
</Box>
</>
  );
}

export default App;
