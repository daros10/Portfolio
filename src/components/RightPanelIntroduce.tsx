import React from 'react';
import { data } from '../data/data';
import { Box, Button, Divider, Grid, Typography } from '@material-ui/core';

export const RightPanelIntroduce = () => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      style={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        border: '0px solid white',
        borderRadius: '10px',
      }}
    >
      <Grid item>
        <Typography
          variant='h3'
          style={{ fontWeight: 'bold', textAlign: 'center' }}
        >
          {'Welcome'.toUpperCase()}
        </Typography>
      </Grid>
      <Divider style={{ backgroundColor: 'white' }} />
      <Grid item>
        <Divider style={{ marginTop: '10px' }} />
        <Typography
          variant='overline'
          style={{
            textAlign: 'justify',
            marginTop: '10px',
            color: 'whitesmoke',
          }}
        >
          {data.presonalInfo.about}
        </Typography>
        <Divider style={{ marginTop: '10px' }} />
      </Grid>
      <Grid item>
        <Box style={{ marginTop: '10px' }}>
          <Button
            variant='outlined'
            style={{
              border: '1px solid white',
              color: 'white',
            }}
            fullWidth
            size={'large'}
          >
            Get Started
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
