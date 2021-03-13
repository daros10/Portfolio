import React from 'react';
import { Grid } from '@material-ui/core';
import { MainCardInfo } from '../components/MainCardInfo';

export const Introduce = () => {
  return (
    <>
      <Grid
        container
        spacing={5}
        justify='center'
        alignItems='center'
        style={{ marginTop: '80px' }}
      >
        <MainCardInfo />
      </Grid>
    </>
  );
};
