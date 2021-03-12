import React from 'react';
import { Grid } from '@material-ui/core';
import { RightPanelIntroduce } from '../components/RightPanelIntroduce';
import { LeftPanelIntroduce } from '../components/LeftPanelIntroduce';

export const Introduce = () => {
  return (
    <>
      <Grid container spacing={5} justify='center' alignItems='center'>
        <LeftPanelIntroduce />
        <RightPanelIntroduce />
      </Grid>
    </>
  );
};
