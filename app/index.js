/* eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'

// Redux
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'

// Reducers
import currentBitcoinPrice from './reducers/currentBitcoin'
import customerAddress from './reducers/addressReducer'
import txHistory from './reducers/txHistoryReducer'
import txSkeleton from './reducers/transactionReducer'
import weatherInfo from './reducers/weatherReducer'
import initialState from './reducers/initialState'
const store = createStore(
  combineReducers({
    currentBitcoinPrice,
    customerAddress,
    txHistory,
    txSkeleton,
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
import StyleGuide from './components/util/StyleGuide'
import Foot from './components/foot/Foot'
/* eslint-enable no-unused-vars */

// Styles
import './styles/main.scss'

// Start Websocket
import priceSocket from './middleware/bitcoin'
priceSocket(store)

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
              <Route exact path="/style-guide" component={StyleGuide} />
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
