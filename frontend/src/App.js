import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import yearbook from './images/yearbook-logo.png';

const App = () => {
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Sign My Yearbook</Typography>
        <img src={yearbook} alt="yearbook" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App; 