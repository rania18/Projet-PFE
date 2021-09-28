
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store.js';
import DetailVehicules from "views/examples/DetailVehicules";
import Login from "views/examples/Login.js";
import Register from "views/examples/Register.js";

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      {/* <Route path="/detail" render={props=><AdminLayout {...props}/>} /> */}
      

      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/register" component={Register} />
      {/* <Route exact path="/profile" component={Profile} /> */}
      {/* <Route path="/user" component={BoardUser} />
      <Route path="/admin" component={BoardAdmin} /> */}
       <Redirect from="/" to="/auth/login" /> 
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
