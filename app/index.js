import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

// Router
import { HashRouter, Switch, Route } from 'react-router-dom'

import LandingPage from './containers/landing/LandingPage'
import HistoryPage from './containers/history/HistoryPage'
import NotFoundPage from './containers/notFound/NotFoundPage'
import Navigation from './components/navigation/Navigation'

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
              <Route exact path="/history" component={HistoryPage} />
              <Route component={NotFoundPage}/>
            </Switch>
          </div>
        </HashRouter>
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
)
