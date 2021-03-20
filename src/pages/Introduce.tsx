import React from 'react';
import { Grid } from '@material-ui/core';
import { MainCardInfo } from '../components/MainCardInfo';
import { Animated } from 'react-animated-css';

export const Introduce = () => {
  return (
    <>
      <Grid
        container
        spacing={5}
        justify='center'
        alignItems='center'
        style={{
          marginTop: '80px',
          marginBottom: '20px',
        }}
      >
        <Animated animationIn='fadeIn' animationOut='fadeOut' isVisible={true}>
          <MainCardInfo />
        </Animated>
      </Grid>
    </>
  );
};
