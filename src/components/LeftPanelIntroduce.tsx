import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import { GitHub, LinkedIn, Twitter } from '@material-ui/icons';
import { data } from '../data/data';
import img from '../assets/daro.png';

export const LeftPanelIntroduce = () => {
  return (
    <Grid item spacing={8}>
      <Card
        style={{
          backgroundColor: 'transparent',
          border: '1px solid white',
          textAlign: 'end',
        }}
      >
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Who am I'
            width='348'
            height='348'
            image={img}
            style={{
              objectFit: 'cover',
            }}
          />
          <CardContent>
            <Typography
              variant='h5'
              style={{ fontWeight: 'bold', textAlign: 'center' }}
            >
              {data.presonalInfo.fullName.toUpperCase()}
            </Typography>
            <Divider style={{ backgroundColor: 'white', marginTop: '5px' }} />
            <Grid container direction='row' justify='center' spacing={1}>
              <Grid item>
                <IconButton
                  style={{ color: 'white' }}
                  onClick={() =>
                    window.open(`${data.presonalInfo.twitter}`, '_blank')
                  }
                >
                  <Twitter fontSize='large' />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  style={{ color: 'white' }}
                  onClick={() =>
                    window.open(`${data.presonalInfo.linkedin}`, '_blank')
                  }
                >
                  <LinkedIn fontSize='large' />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  style={{ color: 'white' }}
                  onClick={() =>
                    window.open(`${data.presonalInfo.github}`, '_blank')
                  }
                >
                  <GitHub fontSize='large' />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
