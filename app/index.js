/* eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'

// Redux
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'

import videoData from './reducers/videoReducer'
import weatherInfo from './reducers/weatherReducer'
import initialState from './reducers/initialState'
const store = createStore(
  combineReducers({
    videoData,
    weatherInfo,
    routing: routerReducer
  }),
  initialState,
  applyMiddleware(thunk)
)

// Router
import { HashRouter, Switch, Route } from 'react-router-dom'

// import App from './components/App'
import Navigation from './components/navigation/Navigation'
import LandingPage from './components/landing/LandingPage'
import NewTransaction from './components/transaction/newTransaction/NewTransactionPage'
import NotFoundPage from './components/util/NotFoundPage'
import Foot from './components/foot/Foot'
/* eslint-enable no-unused-vars */

// Styles
import './styles/main.scss'

render(
  <Provider store={store}>
    <div className="BoilerPlateRoot">
      <div className="app-body">
        <HashRouter>
          <div>
            <Navigation />

            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/new" component={NewTransaction} />
              <Route component={NotFoundPage}/>
            </Switch>

            <Foot />
          </div>
        </HashRouter>
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
)
