import React, { PropsWithChildren } from "react";
import { Divider } from "@material-ui/core";
import { customDividerStyles } from "./CustomDivider.styles";
import { ICustomDividerProps } from "./ICustomDividerProps";
import { get } from "lodash";
import { OrientationEnum } from "../../../constants/OrientationEnum";

export const CustomDivider: React.FC<ICustomDividerProps> = (
  props: PropsWithChildren<ICustomDividerProps>
) => {
  const classes = customDividerStyles();

  return (
    <Divider
      orientation={get(props, "orientation", OrientationEnum.VERTICAL)}
      className={classes.divider}
    />
  );
};
