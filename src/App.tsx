import React, { useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";

export default function App() {
  const history = useHistory();

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
