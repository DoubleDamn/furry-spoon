import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { reducers } from "./reducers";
import InfoPage from "./info-page/info-page.route";
import "./index.css";

// const sagaMiddleware = createSagaMiddleware();
export const enhancers = applyMiddleware(thunk);

export const store = createStore(reducers, enhancers);

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route component={InfoPage} />
    </BrowserRouter>
  </Provider>
);

// sagaMiddleware.run(exampleSaga);