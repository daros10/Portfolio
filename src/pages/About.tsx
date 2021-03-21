import React from 'react';
import { Chip, Container, Divider, Grid, Typography } from '@material-ui/core';
import { Animated } from 'react-animated-css';
import { data } from '../data/data';
import { generateRandomColor } from '../utils/Utlis';

export const About = () => {
  return (
    <>
      <Container
        style={{
          marginTop: '50px',
          marginBottom: '50px',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <Animated animationIn='fadeIn' animationOut='fadeOut' isVisible={true}>
          <Grid container spacing={2} justify='center'>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              alignItems='center'
              style={{
                border: '1px solid white',
                borderRadius: '12px',
                textAlign: 'left',
              }}
            >
              <Typography
                variant='h3'
                style={{ fontWeight: 'bold', margin: '10px' }}
              >
                Biografía
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
        </Animated>
        <Grid container style={{ marginTop: '10px' }} justify='center'>
          <Grid item xs={12} sm={8} direction='row'>
            <Typography
              variant='h3'
              style={{
                textAlign: 'center',
                marginTop: '30px',
                marginBottom: '10px',
                fontWeight: 'bold',
              }}
            >
              Skills
            </Typography>
            <Animated
              animationInDelay={800}
              animationIn='flash'
              animationOut='fadeOut'
              isVisible={true}
            >
              {data.skills.map((skill, index) => (
                <Chip
                  variant='outlined'
                  key={`${skill}+${index}`}
                  label={`${skill}`}
                  style={{
                    borderColor: `${generateRandomColor()}`,
                    color: 'white',
                    marginLeft: '10px',
                    marginRight: '3px',
                    marginBottom: '10px',
                    fontWeight: 'bold',
                  }}
                />
              ))}
            </Animated>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
