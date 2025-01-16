import { IUseAppbarState } from "./IUseAppbarState";
import React, { useState } from "react";
import { generateRandomColor } from "../../../utils/Utlis";
import { useTranslation } from "react-i18next";
import { ISnackbar } from "../../../interafces/ISnackbar";
import { LanguageEnum } from "../../../constants/LanguageEnum";
import { PortfolioConstants } from "../../../constants/PortfolioConstants";

export const useAppbarState = (): IUseAppbarState => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(
    LanguageEnum.ES
  );
  const [randomColorIconButton, setRandomColorIconButton] = useState<string>(
    generateRandomColor()
  );
  const [snackbarState, setSnackbarState] = React.useState<ISnackbar>({
    open: false,
    snackbarOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
  });
  const { snackbarOrigin, open } = snackbarState;
  const [languageUserMessage, setLanguageUserMessage] = useState<string>("");

  const handleCloseSnackbar = (): void => {
    setSnackbarState({ ...snackbarState, open: false });
  };

  const handleOnClick = (): void => {
    setRandomColorIconButton(generateRandomColor());
  };

  const handleOnClickAccessibility = async () => {
    if (currentLanguage === LanguageEnum.ES) {
      setCurrentLanguage(LanguageEnum.EN);
      setLanguageUserMessage(PortfolioConstants.SPANISH_ALERT_MESSAGE);
    } else {
      setCurrentLanguage(LanguageEnum.ES);
      setLanguageUserMessage(PortfolioConstants.ENGLISH_ALERT_MESSAGE);
    }

    await i18n.changeLanguage(currentLanguage);
    setSnackbarState({ ...snackbarState, open: true });
  };

  return {
    t,
    randomColorIconButton,
    open,
    snackbarOrigin,
    languageUserMessage,
    handleOnClick,
    handleOnClickAccessibility,
    handleCloseSnackbar,
  };
};
