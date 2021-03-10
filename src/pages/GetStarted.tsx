import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  gridContainer: {
    marginTop: '10%',
    textAlign: 'center',
  },
  gritItemRigth: {
    textAlign: 'start',
  },
  media: {
    width: '100%',
    height: '380px',
  },
});

export const GetStarted = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={4}>
          <Card
            style={{
              backgroundColor: 'transparent',
              boxShadow: 'none',
              border: '1px solid white',
              borderRadius: '10px',
            }}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={
                  'https://poptaim.com/wp-content/uploads/2020/09/Final-Space-Principal-900x600.jpg'
                }
              />
            </CardActionArea>
            <CardContent>
              <Typography
                style={{
                  fontWeight: 'bold',
                  fontSize: '32px',
                  color: 'white',
                }}
              >
                Dario Herrera
              </Typography>
              <Divider
                style={{
                  backgroundColor: '#1f222d',
                  height: '2px',
                }}
              />
              <Typography
                style={{
                  fontWeight: 'bold',
                  fontSize: '28px',
                  color: 'darkgray',
                }}
              >
                Software Developer
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={8}
          style={{
            border: '1px solid white',
            borderRadius: '10px',
            marginTop: '12px',
            marginBottom: '12px',
          }}
        >
          <Typography style={{ fontSize: '90px' }}>{'Hello'}</Typography>
          <Typography style={{ fontSize: '80px' }}>
            {'Nice to meet you!'}
          </Typography>
          <Divider style={{ backgroundColor: '#1f222d' }} />
          <Typography
            style={{
              fontWeight: 'bold',
              color: 'darkgray',
              textAlign: 'center',
            }}
          >
            {'Press Get Started to know about me.'}
          </Typography>
          <div>
            <Divider style={{ backgroundColor: '#1f222d' }} />
          </div>

          <Button
            variant='outlined'
            size='large'
            style={{ width: '50%', height: '80px' }}
            color='primary'
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};
