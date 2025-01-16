import { makeStyles } from "@material-ui/core/styles";

export const mainCardInfoStyles = makeStyles({
  opacity: {
    color: "white",
    "&:hover": {
      opacity: 0.6,
    },
  },
  mainCard: {
    backgroundColor: "transparent",
    border: "1px solid white",
    textAlign: "end",
  },
  cardMedia: {
    objectFit: "cover",
  },
  name: {
    fontWeight: "bold",
    textAlign: "center",
  },
  divider: {
    backgroundColor: "white",
    marginTop: "5px",
  },
});
