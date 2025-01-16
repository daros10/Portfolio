import { makeStyles } from "@material-ui/core/styles";
import { get } from "lodash";

const baseColor: string = "1px solid white";

export const appbarStyles = makeStyles({
  mainContainer: {
    backgroundColor: "transparent",
    borderLeft: baseColor,
    borderRight: baseColor,
    borderTop: "0px",
    borderBottom: baseColor,
    borderBottomLeftRadius: "15px",
    WebkitBorderBottomRightRadius: "15px",
    alignItems: "center",
    textAlign: "center",
  },
  iconButtonTooltipOpacity: {
    "&:hover": {
      opacity: 0.8,
    },
  },
  iconButtonTooltipActive: {
    opacity: 0.6,
    paddingTop: "1px",
    borderRadius: "0px",
    borderBottomWidth: "2px",
  },
});
