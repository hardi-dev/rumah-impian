import React, { Fragment } from "react";
import { GlobalStyles } from "./styles/global.styles";
import { HomeHero } from "./containers";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <HomeHero />
    </Fragment>
  );
}

export default App;
