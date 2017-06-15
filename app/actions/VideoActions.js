import * as types from '../constants/actionTypes'
import api from '../middleware/api'

export function getVideosSuccess (videoData) {
  return { type: types.LOAD_VIDEOS_SUCCESS, videoData }
}

export function getVideos () {
  return function (dispatch) {
    return api.getVideos()
      .then(videoData => {
        dispatch(getVideosSuccess(videoData))
      }).catch(error => {
        throw error
      })
  }
}
