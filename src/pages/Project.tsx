import React from 'react';
import {
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';
import { Animated } from 'react-animated-css';
import { data } from '../data/data';
import { generateRandomColor } from '../utils/Utlis';

export const Project = () => {
  return (
    <>
      <Container fixed style={{ marginTop: '50px', marginBottom: '50px' }}>
        <Animated animationIn='fadeIn' animationOut='fadeOut' isVisible={true}>
          <Typography
            variant='h4'
            style={{ fontWeight: 'bold', textAlign: 'left' }}
          >
            Proyectos Profesionales
          </Typography>
          <Grid container spacing={4} justify='center' alignItems='center'>
            {data.professionalProjects.map((data, index) => (
              <Grid
                key={`${index}${data.name}`}
                item
                direction='row'
                xs={12}
                sm={6}
              >
                <Card
                  variant='outlined'
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid white',
                    marginTop: '10px',
                  }}
                >
                  <CardContent style={{ textAlign: 'inherit' }}>
                    <Typography
                      variant='h5'
                      style={{
                        fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center',
                      }}
                    >
                      <Link href={data.github} target='_blank' color='inherit'>
                        {data.name}
                      </Link>
                    </Typography>
                    <Divider
                      style={{
                        backgroundColor: 'white',
                        marginTop: '5px',
                        marginBottom: '5px',
                      }}
                    />
                    <Typography
                      variant='overline'
                      style={{
                        color: 'white',
                      }}
                    >
                      {data.description}
                    </Typography>
                    <Divider
                      style={{
                        backgroundColor: 'white',
                        marginTop: '5px',
                        marginBottom: '5px',
                      }}
                    />
                    {data.languagesTools.map((data, index) => (
                      <Chip
                        key={`${data}+${index}`}
                        label={`${data}`}
                        style={{
                          backgroundColor: `${generateRandomColor()}`,
                          color: 'white',
                          marginLeft: '5px',
                          marginRight: '3px',
                          marginTop: '10px',
                          fontWeight: 'bold',
                        }}
                      />
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography
            variant='h4'
            style={{ fontWeight: 'bold', textAlign: 'left', marginTop: '15px' }}
          >
            Proyectos Personales
          </Typography>
          <Grid container spacing={4} justify='center' alignItems='center'>
            {data.personalProjects.map((data, index) => (
              <Grid
                key={`${index}${data.name}`}
                item
                direction='row'
                xs={12}
                sm={6}
              >
                <Card
                  variant='outlined'
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid white',
                    marginTop: '10px',
                  }}
                >
                  <CardContent style={{ textAlign: 'inherit' }}>
                    <Typography
                      variant='h5'
                      style={{
                        fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center',
                      }}
                    >
                      <Link href={data.github} target='_blank' color='inherit'>
                        {data.name}
                      </Link>
                    </Typography>
                    <Divider
                      style={{
                        backgroundColor: 'white',
                        marginTop: '5px',
                        marginBottom: '5px',
                      }}
                    />
                    <Typography
                      variant='overline'
                      style={{
                        fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'justify',
                      }}
                    >
                      {data.description}
                    </Typography>
                    <Divider
                      style={{
                        backgroundColor: 'white',
                        marginTop: '5px',
                        marginBottom: '5px',
                      }}
                    />
                    {data.languagesTools.map((data, index) => (
                      <Chip
                        key={`${data}+${index}`}
                        label={`${data}`}
                        style={{
                          backgroundColor: `${generateRandomColor()}`,
                          color: 'white',
                          marginLeft: '5px',
                          marginRight: '3px',
                          marginTop: '10px',
                          fontWeight: 'bold',
                        }}
                      />
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Animated>
      </Container>
    </>
  );
};
