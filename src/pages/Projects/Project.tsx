import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import { Animated } from "react-animated-css";
import { data } from "../../data/data";
import { generateRandomColor } from "../../utils/Utlis";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useTranslation } from "react-i18next";

export const Project = () => {
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
                Proyectos Profesionales
              </Typography>
            </AccordionSummary>
            <hr />
            <AccordionDetails>
              <Grid container spacing={4} justify="center" alignItems="center">
                {data(t).professionalProjects.map((data, index) => (
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
                      <CardContent style={{ textAlign: "inherit" }}>
                        <Typography
                          variant="h5"
                          style={{
                            fontWeight: "bold",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          <Link
                            href={data.github}
                            target="_blank"
                            color="inherit"
                          >
                            {data.name.toUpperCase()}
                          </Link>
                        </Typography>
                        <Divider
                          style={{
                            backgroundColor: "white",
                            marginTop: "5px",
                            marginBottom: "5px",
                          }}
                        />
                        <Typography
                          variant="overline"
                          style={{
                            color: "white",
                          }}
                        >
                          {data.description}
                        </Typography>
                        <Divider
                          style={{
                            backgroundColor: "white",
                            marginTop: "5px",
                            marginBottom: "5px",
                          }}
                        />
                        {data.languagesTools.map((data, index) => (
                          <Chip
                            key={`${data}+${index}`}
                            label={`${data}`}
                            style={{
                              backgroundColor: `${generateRandomColor()}`,
                              color: "white",
                              marginLeft: "5px",
                              marginRight: "3px",
                              marginTop: "10px",
                              fontWeight: "bold",
                            }}
                          />
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion
            defaultExpanded={false}
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
                Proyectos Personales
              </Typography>
            </AccordionSummary>
            <hr />
            <AccordionDetails>
              <Grid container spacing={4} justify="center" alignItems="center">
                {data(t).personalProjects.map((data, index) => (
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
                      <CardContent style={{ textAlign: "inherit" }}>
                        <Typography
                          variant="h5"
                          style={{
                            fontWeight: "bold",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          <Link
                            href={data.github}
                            target="_blank"
                            color="inherit"
                          >
                            {data.name.toLocaleUpperCase()}
                          </Link>
                        </Typography>
                        <Divider
                          style={{
                            backgroundColor: "white",
                            marginTop: "5px",
                            marginBottom: "5px",
                          }}
                        />
                        <Typography
                          variant="overline"
                          style={{
                            fontWeight: "bold",
                            color: "white",
                            textAlign: "justify",
                          }}
                        >
                          {data.description}
                        </Typography>
                        <Divider
                          style={{
                            backgroundColor: "white",
                            marginTop: "5px",
                            marginBottom: "5px",
                          }}
                        />
                        {data.languagesTools.map((data, index) => (
                          <Chip
                            key={`${data}+${index}`}
                            label={`${data}`}
                            style={{
                              backgroundColor: `${generateRandomColor()}`,
                              color: "white",
                              marginLeft: "5px",
                              marginRight: "3px",
                              marginTop: "10px",
                              fontWeight: "bold",
                            }}
                          />
                        ))}
                      </CardContent>
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
