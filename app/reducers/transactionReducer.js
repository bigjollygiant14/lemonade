import * as types from '../constants/actionTypes'
import initialState from './initialState'

export default function addressReducer (state = initialState.txSkeleton, action) {
  switch (action.type) {
    case types.CREATE_TRANSACTION_SUCCESS :
      return Object.assign({}, ...state, action.txSkeleton)

    default:
      return state
  }
}
