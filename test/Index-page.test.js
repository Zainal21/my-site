import React from "react";
import { mount } from "@cypress/react";
import Home from "../pages/index";

it("renders Home Page", () => {
  mount(<Home />);
});
