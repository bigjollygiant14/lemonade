import {createStore, compose, applyMiddleware} from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

/**
 * Logs all actions and states after they are dispatched. */
/* eslint-ignore-disable no-unused-vars */
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}
/* eslint-ignore-enable no-unused-vars */

function configureStoreProd (initialState) {
  const middlewares = [
    thunk
  ]

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
  ))
}

function configureStoreDev (initialState) {
  const middlewares = [
    reduxImmutableStateInvariant(),
    thunk
    // logger
  ]

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
  ))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default // eslint-disable-line global-require
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev

export default configureStore
