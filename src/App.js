import './App.css';
import styles from './App.styles';
import { Container, FormControl, InputLabel, Input, FormHelperText, Button, Grid } from '@material-ui/core';

function App() {
  const classes = styles();
  return (
    <Container>
      <Grid container>
        <Grid item md={12}>
          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="eamil" type="email" aria-describedby="email-helper" />
            <FormHelperText id="email-helper">Tu email personal no empresarial</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item md={12}>
        <FormControl>
          <InputLabel htmlFor="pwd">Password</InputLabel>
            <Input id="pwd" type="password" aria-describedby="pwd-helper" />
            <FormHelperText id="pwd-helper">entre 8 y 16 carateres</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item md={12}>
        <Button variant="contained" color="primary" >
          Iniciar Sesion
        </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
