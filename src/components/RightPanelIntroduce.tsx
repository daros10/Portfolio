import React from 'react';
import { data } from '../data/data';
import { Box, Button, Divider, Grid, Typography } from '@material-ui/core';

export const RightPanelIntroduce = () => {
  return (
    <Grid
      item
      xs={6}
      sm={6}
      style={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        border: '0px solid white',
        borderRadius: '10px',
      }}
    >
      <Grid item xs={3}>
        <Typography
          variant='h2'
          style={{ fontWeight: 'bold', textAlign: 'left' }}
        >
          Hello
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant='h3'
          style={{ fontWeight: 'bold', textAlign: 'left' }}
        >
          Nice to meet you!
        </Typography>
      </Grid>
      <Grid item>
        <Divider style={{ marginTop: '10px' }} />
        <Typography
          variant='h6'
          style={{
            textAlign: 'justify',
            marginTop: '10px',
            color: 'whitesmoke',
          }}
        >
          {data.about}
        </Typography>
        <Divider style={{ marginTop: '10px' }} />
      </Grid>
      <Grid item>
        <Box style={{ marginTop: '10px' }}>
          <Button variant='outlined' color='secondary' fullWidth size={'large'}>
            Get Started
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
