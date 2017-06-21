import * as types from '../constants/actionTypes'
import initialState from './initialState'

export default function addressReducer (state = initialState.customerAddress, action) {
  switch (action.type) {
    case types.CREATE_CUSTOMER_ADDRESS_SUCCESS :
      return Object.assign({}, ...state, action.customerAddress)

    default:
      return state
  }
}
