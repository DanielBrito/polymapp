import React from "react";

import { Grid } from "@material-ui/core";

import Logo from "./assets/img/polymapp_logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <Grid container spacing={0} direction="column" className="Presentation">
        <Grid item xl={12}>
          <img src={Logo} className="AppLogo" alt="PolymApp logo" />
        </Grid>
        <Grid item xl={12}>
          <p>
            <strong>Polym</strong>App
          </p>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
