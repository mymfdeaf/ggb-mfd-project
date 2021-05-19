import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, SideCategoryLayout } from "./layouts";

// Route Views
import Errors from "./views/Errors";
import AboutUs from "./views/AboutUs";
import Home from "./views/Home";
import BrowseByCategory from "./views/BrowseByCategory";
import SelectedGroup from "./views/SelectedGroup";
import SelectedCategory from "./views/SelectedCategory";
import SelectedVocab from "./views/SelectedVocab";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/home" />,
  },
  {
    path: "/home",
    exact: true,
    layout: DefaultLayout,
    component: Home,
  },
  {
    path: "/errors",
    exact: true,
    layout: DefaultLayout,
    component: Errors,
  },
  {
    path: "/about-us",
    exact: true,
    layout: DefaultLayout,
    component: AboutUs,
  },
  {
    path: "/browse-by-category",
    exact: true,
    layout: DefaultLayout,
    component: BrowseByCategory,
  },
  {
    path: "/:group",
    exact: true,
    layout: SideCategoryLayout,
    component: SelectedGroup,
  },   
  {
    path: "/:group/:category",
    exact: true,
    layout: SideCategoryLayout,
    component: SelectedCategory,
  },
  {
    path: "/:group/:category/:vocab",
    exact: true,
    layout: DefaultLayout,
    component: SelectedVocab,
  },
];
