import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { RightPanelIntroduce } from '../components/RightPanelIntroduce';

export const Introduce = () => {
  return (
    <>
      <Grid container spacing={5} justify='center' alignItems='center'>
        <Grid
          item
          xs={6}
          sm={6}
          spacing={8}
          style={{ border: '1px solid red' }}
        >
          <Typography
            style={{
              textAlign: 'end',
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            totam pariatur consectetur architecto tempora, velit aspernatur
            distinctio culpa asperiores non excepturi ex, sunt quidem voluptatum
            sint provident illum eveniet porro? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nobis placeat alias tenetur obcaecati
            fuga quae maiores laboriosam facilis error quia dolore nostrum, cum
            dolorem minus saepe sunt temporibus impedit tempore. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Natus ratione atque qui
            saepe, voluptates dolorem laboriosam doloribus et sed quae
            excepturi? Molestiae, pariatur facilis. Quia eum vel dicta natus ea.
          </Typography>
        </Grid>
        <RightPanelIntroduce />
      </Grid>
    </>
  );
};
