import { SnackbarOrigin } from "@material-ui/core";
import { TFunction } from "react-i18next";

export interface IUseAppbarState {
  randomColorIconButton: string;
  open: boolean;
  snackbarOrigin: SnackbarOrigin;
  t: TFunction<"translation">;
  languageUserMessage: string;
  handleOnClick: () => void;
  handleOnClickAccessibility: () => void;
  handleCloseSnackbar: () => void;
}
