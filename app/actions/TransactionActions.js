import * as types from '../constants/actionTypes'
import api from '../middleware/api'

export function createTransactionSuccess (txSkeleton) {
  return { type: types.CREATE_TRANSACTION_SUCCESS, txSkeleton }
}

export function createTransaction () {
  return function (dispatch) {
    return api.createTransaction()
      .then(txSkeleton => {
        dispatch(createTransactionSuccess(txSkeleton))
      }).catch(error => {
        throw error
      })
  }
}
