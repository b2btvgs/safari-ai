import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Amplify from "aws-amplify";
import "./index.css";
import App from "./App";
import awsmobile from "./aws-exports";
import * as serviceWorker from "./serviceWorker";

// Amplify.configure({
//   Auth: {
//     mandatorySignIn: true,
//     region: awsmobile.aws_project_region,
//     userPoolId: awsmobile.aws_user_pools_id,
//     identityPoolId: awsmobile.aws_cognito_identity_pool_id,
//     userPoolWebClientId: awsmobile.aws_user_pools_web_client_id
//   }
// });

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
