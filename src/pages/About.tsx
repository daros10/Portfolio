import React from 'react';
import { Chip, Container, Divider, Grid, Typography } from '@material-ui/core';
import { data } from '../data/data';
import { generateRandomColor } from '../utils/Utlis';

export const About = () => {
  return (
    <>
      <Container
        style={{
          marginTop: '50px',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid container spacing={2} justify='center'>
          <Grid
            item
            xs={7}
            alignItems='center'
            style={{
              border: '1px solid white',
              borderRadius: '12px',
              textAlign: 'left',
            }}
          >
            <Typography
              variant='h2'
              style={{ fontWeight: 'bold', margin: '10px' }}
            >
              Hello
            </Typography>
            <Typography
              variant='h4'
              style={{ fontWeight: 'bold', margin: '10px' }}
            >
              Here's who I am & what I do
            </Typography>
            <Divider style={{ backgroundColor: 'white', margin: '10px' }} />
            <Typography
              variant='h6'
              style={{ textAlign: 'justify', margin: '10px' }}
            >
              {data.presonalInfo.about}
            </Typography>
            {data.favoriteLanguagesFrameworks.map((data, index) => (
              <Chip
                key={`${data}+${index}`}
                label={`${data}`}
                style={{
                  backgroundColor: `${generateRandomColor()}`,
                  color: 'white',
                  marginLeft: '10px',
                  marginRight: '3px',
                  marginBottom: '10px',
                  fontWeight: 'bold',
                }}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
