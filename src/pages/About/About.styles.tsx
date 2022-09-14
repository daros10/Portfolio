import { makeStyles } from "@material-ui/core/styles";
import { generateRandomColor } from "../../utils/Utlis";

export const aboutStyles = makeStyles({
  mainContainer: {
    marginTop: "50px",
    marginBottom: "50px",
    textAlign: "center",
    justifyContent: "center",
  },
  gridAbout: {
    border: "1px solid white",
    borderRadius: "12px",
    textAlign: "left",
  },
  textAbout: {
    fontWeight: "bold",
    margin: "10px",
  },
  divider: {
    backgroundColor: "white",
    margin: "10px",
  },
  textDescription: {
    textAlign: "justify",
    margin: "10px",
  },
  chips: {
    backgroundColor: `${generateRandomColor()}`,
    color: "white",
    marginLeft: "10px",
    marginRight: "3px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  titleSkills: {
    textAlign: "center",
    marginTop: "30px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  secondaryGrid: {
    marginTop: "10px",
  },
});
