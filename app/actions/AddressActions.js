import * as types from '../constants/actionTypes'
import api from '../middleware/api'

export function createCustomerAddressSuccess (customerAddress) {
  return { type: types.CREATE_CUSTOMER_ADDRESS_SUCCESS, customerAddress }
}

export function createCustomerAddress () {
  return function (dispatch) {
    return api.createAddress()
      .then(customerAddress => {
        console.log(customerAddress)
        dispatch(createCustomerAddressSuccess(customerAddress))
      }).catch(error => {
        throw error
      })
  }
}
