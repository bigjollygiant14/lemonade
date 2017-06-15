import React from 'react'
import { render } from 'react-dom'

// Redux
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'

import videoData from './reducers/videoReducer'
import initialState from './reducers/initialState'
const store = createStore(
  combineReducers({
    videoData,
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
import NotFoundPage from './components/util/NotFoundPage'

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
              <Route component={NotFoundPage}/>
            </Switch>
          </div>
        </HashRouter>
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
)
