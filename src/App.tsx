import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import history from './common/helpers/history';

import { reducers } from './reducers';
import InfoPage from './info-page/info-page.route';
import { CITIES_NAMES } from './typing/enum';
import { rootSaga } from './info-page/helpers/info-page.saga';

import './index.css';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { Header } from './common/header/header.component';

const sagaMiddleware = createSagaMiddleware();
export const enhancers = applyMiddleware(sagaMiddleware);

export const store = createStore(reducers, enhancers);

export const App = () => (
	<Provider store={store}>
		<Router history={history}>
			<Header />
			<Switch>
				<Route exact path="/page-not-found" component={PageNotFound} />
				<Route exact path="/:cityName" component={InfoPage} />
				<Route exact path="/" render={() => <Redirect to={`${CITIES_NAMES.spb}`} />} />
				<Route path="*" component={PageNotFound} />
			</Switch>
		</Router>
	</Provider>
);

sagaMiddleware.run(rootSaga);
