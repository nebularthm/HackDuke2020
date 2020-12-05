import React from "react";
import "./styles.css";
import Registration from "./Registration";
import PolInfo from "./PolInfo";
import SurveyPage from "./SurveyPage";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <Switch>
        <Route exact from="/" render={props => <Registration {...props} />} />
        <Route exact path="/PolInfo" render={props => <PolInfo {...props} />} />
        <Route exact path="/SurveyPage" render={props => <SurveyPage {...props} />} />
      </Switch>
    </div>
  );
}