import React from "react";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";

import withAuthentication from "./Components/Auth/withAuthentication";

const App = () => (
  <div>
    <Navbar />
    <Main />
  </div>
);

export default withAuthentication(App);
