import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { data } from "../../data/data";
import img from "../../assets/daro.png";
import { useTranslation } from "react-i18next";
import { mainCardInfoStyles } from "./MainCardInfo.styles";
import { SOCIAL_NETWORK_INFO } from "../../constants/PortfolioConstants";
import { ISocialNetwork } from "../../interafces/ISocialNetwork";
import { get } from "lodash";

export const MainCardInfo = () => {
  const classes = mainCardInfoStyles();
  const { t } = useTranslation();

  return (
    <Grid item spacing={8}>
      <Card className={classes.mainCard}>
        <CardActionArea>
          <CardMedia
            component={"img"}
            alt={""}
            width="400"
            height="400"
            image={img}
            className={classes.cardMedia}
          />
          <CardContent>
            <Typography variant="h5" className={classes.name}>
              {data(t).personalInformation.fullName}
            </Typography>
            <Divider className={classes.divider} />
            <Grid container direction="row" justify="center" spacing={1}>
              {SOCIAL_NETWORK_INFO(
                get(data(t), "personalInformation.twitter"),
                get(data(t), "personalInformation.linkedin"),
                get(data(t), "personalInformation.github")
              ).map((data: ISocialNetwork, index: number) => (
                <Grid item key={`${data.url}-${index}`}>
                  <IconButton
                    className={classes.opacity}
                    onClick={() => window.open(data.url, "_blank")}
                  >
                    {data.icon}
                  </IconButton>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
