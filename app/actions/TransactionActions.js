import * as types from '../constants/actionTypes'
import api from '../middleware/api'

export function createTransactionSuccess (txSkeleton) {
  return { type: types.CREATE_TRANSACTION_SUCCESS, txSkeleton }
}

export function createTransaction (payload) {
  return function (dispatch) {
    return api.createTransaction(payload)
      .then(txSkeleton => {
        dispatch(createTransactionSuccess(txSkeleton))
      }).catch(error => {
        throw error
      })
  }
}
