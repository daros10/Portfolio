import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Animated } from "react-animated-css";
import { data } from "../../data/data";
import { PlayArrowRounded } from "@material-ui/icons";
import { generateRandomColor } from "../../utils/Utlis";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useTranslation } from "react-i18next";

export const Resume = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container fixed style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <Accordion
            defaultExpanded={true}
            style={{
              backgroundColor: "transparent",
              borderColor: "white",
              border: "1px solid white",
              borderRadius: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            >
              <Typography
                variant="h4"
                style={{ fontWeight: "bold", textAlign: "left" }}
              >
                {t("experience.title")}
              </Typography>
            </AccordionSummary>
            <hr />
            <AccordionDetails>
              <Grid container spacing={4} justify="center" alignItems="center">
                {data(t)
                  .experience.reverse()
                  .map((data, index) => (
                    <Grid
                      key={`${index}${data.nameFactory}`}
                      item
                      direction="row"
                      xs={12}
                      sm={6}
                    >
                      <Card
                        style={{
                          backgroundColor: "transparent",
                          border: "1px solid white",
                          marginTop: "10px",
                        }}
                      >
                        <CardActionArea>
                          <CardMedia component="img" image={data.icon} />
                          <Divider style={{ backgroundColor: "white" }} />
                          <CardHeader
                            title={
                              <Typography
                                variant="h5"
                                style={{
                                  fontWeight: "bold",
                                  textAlign: "center",
                                }}
                              >
                                <Link
                                  href={data.website}
                                  target="_blank"
                                  color="inherit"
                                >
                                  {data.nameFactory}
                                </Link>
                              </Typography>
                            }
                            subheader={
                              <Typography
                                variant="body2"
                                style={{
                                  fontWeight: "bold",
                                  color: "white",
                                  textAlign: "center",
                                }}
                              >
                                {data.role} <br />
                                {data.dateStar} - {data.dateEnd}
                              </Typography>
                            }
                          />
                        </CardActionArea>
                      </Card>
                      <CardContent
                        style={{
                          backgroundColor: "transparent",
                          border: "1px solid white",
                          textAlign: "center",
                        }}
                      >
                        <List component="nav">
                          {data.tasks.map((task, index) => (
                            <ListItem key={index}>
                              <ListItemIcon>
                                <PlayArrowRounded
                                  style={{
                                    color: `${generateRandomColor()}`,
                                  }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                style={{ color: "white", textAlign: "justify" }}
                              >
                                {task}
                              </ListItemText>
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Grid>
                  ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion
            defaultExpanded={true}
            style={{
              backgroundColor: "transparent",
              borderColor: "white",
              border: "1px solid white",
              borderRadius: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            >
              <Typography
                variant="h4"
                style={{ fontWeight: "bold", textAlign: "left" }}
              >
                {t("education.educationTitle")}
              </Typography>
            </AccordionSummary>
            <hr />
            <AccordionDetails>
              <Grid container spacing={4} justify="center" alignItems="center">
                {data(t).education.map((data, index) => (
                  <Grid
                    key={`${index}${data.name}`}
                    item
                    direction="row"
                    xs={12}
                    sm={6}
                  >
                    <Card
                      variant="outlined"
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid white",
                        marginTop: "10px",
                      }}
                    >
                      <CardActionArea>
                        <CardMedia component="img" image={data.icon} />
                        <CardContent>
                          <Typography
                            variant="h5"
                            style={{ fontWeight: "bold" }}
                            align={"center"}
                          >
                            {data.grade}
                          </Typography>
                          <Divider
                            style={{
                              backgroundColor: "white",
                              marginTop: "5px",
                              marginBottom: "5px",
                            }}
                          />
                          <Typography
                            variant="h6"
                            style={{ fontWeight: "bold", color: "white" }}
                            align={"center"}
                          >
                            {data.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            style={{
                              fontWeight: "bold",
                              color: "white",
                              textAlign: "center",
                            }}
                          >
                            {data.speciality}
                          </Typography>
                          {data.course !== undefined &&
                            data.course.map((info, index) => (
                              <ListItem key={index}>
                                <ListItemIcon>
                                  <PlayArrowRounded
                                    style={{
                                      color: `${generateRandomColor()}`,
                                    }}
                                  />
                                </ListItemIcon>
                                <ListItemText
                                  style={{
                                    color: "white",
                                    textAlign: "justify",
                                  }}
                                >
                                  <Link
                                    href={info.url}
                                    target="_blank"
                                    color="inherit"
                                  >
                                    {info.name}
                                  </Link>
                                </ListItemText>
                              </ListItem>
                            ))}
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Animated>
      </Container>
    </>
  );
};
