import React from "react";
import { IIconButtons } from "../interafces/IIconButtons";
import { Link, NavLink } from "react-router-dom";
import {
  DescriptionRounded,
  GetApp,
  Laptop,
  LibraryBooks,
  GTranslate,
  Twitter,
  LinkedIn,
  GitHub,
  Home,
} from "@material-ui/icons";
import { RoutesEnum } from "./RoutesEnum";
import { TFunction } from "react-i18next";
import { ISocialNetwork } from "../interafces/ISocialNetwork";

export const ICON_BUTTON_VALUES = (
  t: TFunction<"translation">
): IIconButtons[] => {
  return [
    {
      title: `${t("appBar.home")}`,
      redirectTo: RoutesEnum.INDEX,
      component: NavLink,
      isLink: true,
      icon: <Home fontSize="large" />,
    },
    {
      title: `${t("appBar.summary")}`,
      redirectTo: RoutesEnum.ABOUT,
      component: NavLink,
      isLink: true,
      icon: <DescriptionRounded fontSize="large" />,
    },
    {
      title: `${t("appBar.experience")}`,
      redirectTo: RoutesEnum.RESUME,
      component: NavLink,
      isLink: true,
      icon: <LibraryBooks fontSize="large" />,
    },
    {
      title: `${t("appBar.projects")}`,
      redirectTo: RoutesEnum.PROJECTS,
      component: NavLink,
      isLink: true,
      icon: <Laptop fontSize="large" />,
    },
    {
      title: `${t("appBar.download")}`,
      redirectTo: RoutesEnum.CV_FILE,
      component: Link,
      isLink: true,
      icon: <GetApp fontSize="large" />,
    },
    {
      title: `${t("appBar.language")}`,
      redirectTo: "",
      component: NavLink,
      isLink: false,
      icon: <GTranslate fontSize="large" />,
    },
  ];
};

export const SOCIAL_NETWORK_INFO = (
  twitterUrl: string,
  linkedinUrl: string,
  githubUrl: string
): ISocialNetwork[] => {
  return [
    {
      name: "twitter",
      url: twitterUrl,
      icon: <Twitter fontSize="large" />,
    },
    {
      name: "linkedin",
      url: linkedinUrl,
      icon: <LinkedIn fontSize="large" />,
    },
    {
      name: "github",
      url: githubUrl,
      icon: <GitHub fontSize="large" />,
    },
  ];
};

export enum PortfolioConstants {
  SPANISH_ALERT_MESSAGE = "Versión en español aplicada con éxito.",
  ENGLISH_ALERT_MESSAGE = "English version successfully applied.",
}
