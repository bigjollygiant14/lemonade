import * as types from '../constants/actionTypes'
// import api from '../middleware/api'

/* export function loadCounterSuccess (videoData) {
  return { type: types.LOAD_VIDEOS_SUCCESS, counterData }
}

export function loadCounter () {
  return function (dispatch) {
    return api.getCounter()
      .then(counterData => {
        dispatch(getCounterSuccess(counterData))
      }).catch(error => {
        throw error
      })
  }
} */

/* export function incrementCounterSuccess() {
  return {
    type: types.INCREMENT_COUNTER
  }
}

export function decrementCounterSuccess() {
  return {
    type: types.DECREMENT_COUNTER_SUCCESS
  }
} */

export function incrementCounter () {
  return function (dispatch) {
    dispatch({
      type: types.INCREMENT_COUNTER
    })
  }
}

export function decrementCounter () {
  return function (dispatch) {
    dispatch({
      type: types.DECREMENT_COUNTER
    })
  }
}
