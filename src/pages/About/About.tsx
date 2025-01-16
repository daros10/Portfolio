import React from "react";
import { Chip, Container, Divider, Grid, Typography } from "@material-ui/core";
import { Animated } from "react-animated-css";
import { data } from "../../data/data";
import { aboutStyles } from "./About.styles";
import { useTranslation } from "react-i18next";
import { generateRandomColor } from "../../utils/Utlis";
import { Avatar } from "@mui/material";
import { ISkills } from "../../interafces/ISkills";

export const About = () => {
  const classes = aboutStyles();
  const { t } = useTranslation();

  return (
    <Container className={classes.mainContainer}>
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <Grid container spacing={2} justify="center">
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            alignItems="center"
            className={classes.gridAbout}
          >
            <Typography variant="h3" className={classes.textAbout}>
              {t("about.aboutMeTitle")}
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="h6" className={classes.textDescription}>
              {data(t).personalInformation.about}
            </Typography>
          </Grid>
        </Grid>
      </Animated>
      <Grid container className={classes.secondaryGrid} justify="space-evenly" spacing={6}>
        <Grid item xs={12} sm={8} direction="row">
          <Animated
            animationInDelay={800}
            animationIn="flash"
            animationOut="fadeOut"
            isVisible={true}
          >
            <Typography variant="h3" className={classes.titleSkills}>
              {t("about.skills")}
            </Typography>
            {data(t).skills.map((skill: ISkills, index: number) => (
              <Chip
                avatar={<Avatar alt={`${skill.alt}`} src={`${skill.icon}`} />}
                variant="outlined"
                key={`${skill}+${index}`}
                label={`${skill.title}`}
                className={classes.chips}
                style={{
                  backgroundColor: `${generateRandomColor()}`,
                }}
              />
            ))}
          </Animated>
        </Grid>
      </Grid>
    </Container>
  );
};
