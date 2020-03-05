import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { reducers } from "./reducers";
import InfoPage from "./info-page/info-page.route";
import { CITIES_NAMES } from "./typing/enam";

import "./index.css";

// const sagaMiddleware = createSagaMiddleware();
export const enhancers = applyMiddleware(thunk);

export const store = createStore(reducers, enhancers);

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/:cityName" component={InfoPage} />
        <Route
          exact
          path="/"
          render={() => <Redirect to={`${CITIES_NAMES.spb}`} />}
        />
      </Switch>
    </BrowserRouter>
  </Provider>
);

// sagaMiddleware.run(exampleSaga);
