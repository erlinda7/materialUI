import './App.css';
import styles from './App.styles';
import { Grid } from '@material-ui/core';

function App() {
  const classes = styles();
  return (
    <Grid container>
      <Grid item md={3} sm={6} xs={12}>
        <img src="https://www.pngkey.com/png/detail/306-3062096_free-mashable-logo-png-material-ui-icon-svg.png"/>
      </Grid >
      <Grid item md={3} sm={6} xs={12}>
        <img src="https://www.pngkey.com/png/detail/306-3062096_free-mashable-logo-png-material-ui-icon-svg.png"/>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <img src="https://www.pngkey.com/png/detail/306-3062096_free-mashable-logo-png-material-ui-icon-svg.png"/>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <img src="https://www.pngkey.com/png/detail/306-3062096_free-mashable-logo-png-material-ui-icon-svg.png"/>
      </Grid>

    </Grid>
  );
}

export default App;
