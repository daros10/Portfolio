import React from "react";
import {
  AppBar,
  IconButton,
  Snackbar,
  Toolbar,
  Tooltip,
} from "@material-ui/core";
import { appbarStyles } from "./Appbar.styles";
import { ICON_BUTTON_VALUES } from "../../constants/PortfolioConstants";
import { IIconButtons } from "../../interafces/IIconButtons";
import { CustomDivider } from "../shared/CustomDivider/CustomDivider";
import { useAppbarState } from "./state/useAppbarState";
import { Alert } from "@mui/material";

export const Appbar = () => {
  const {
    t,
    open,
    snackbarOrigin,
    languageUserMessage,
    randomColorIconButton,
    handleOnClick,
    handleCloseSnackbar,
    handleOnClickAccessibility,
  } = useAppbarState();
  const classes = appbarStyles({
    randomColor: randomColorIconButton,
  });

  return (
    <>
      <AppBar
        position="relative"
        elevation={5}
        className={classes.mainContainer}
      >
        <Toolbar variant="dense">
          {ICON_BUTTON_VALUES(t).map((data: IIconButtons, index: number) => (
            <React.Fragment key={`${data.title}-${index}`}>
              <Tooltip title={data.title}>
                <IconButton
                  color="inherit"
                  exact
                  target={data.title === `${t("appBar.download")}` && "_blank"}
                  className={classes.iconButtonTooltipOpacity}
                  activeClassName={classes.iconButtonTooltipActive}
                  component={data.component}
                  to={data.isLink && data.redirectTo}
                  onClick={() => {
                    data.isLink
                      ? handleOnClick()
                      : handleOnClickAccessibility();
                  }}
                >
                  {data.icon}
                </IconButton>
              </Tooltip>
              {index !== 5 && <CustomDivider />}
            </React.Fragment>
          ))}
        </Toolbar>
      </AppBar>
      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={snackbarOrigin}
        open={open}
        onClose={handleCloseSnackbar}
        key={snackbarOrigin.vertical + snackbarOrigin.horizontal}
      >
        <Alert onClose={handleCloseSnackbar} severity="info">
          {languageUserMessage}
        </Alert>
      </Snackbar>
    </>
  );
};
