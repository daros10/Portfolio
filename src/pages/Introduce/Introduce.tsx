import React from "react";
import { Grid } from "@material-ui/core";
import { MainCardInfo } from "../../components/MainCardInfo/MainCardInfo";
import { Animated } from "react-animated-css";
import { introduceStyles } from "./Introduce.styles";

export const Introduce = () => {
  const classes = introduceStyles();

  return (
    <Grid
      container
      spacing={5}
      justify="center"
      alignItems="center"
      className={classes.mainContainer}
    >
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <MainCardInfo />
      </Animated>
    </Grid>
  );
};
