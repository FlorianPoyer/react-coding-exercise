import { ActionType } from 'redux-promise-middleware'
import { TOGGLE_FAVOURITE_TYPE, FETCH_FAVOURITES_TYPE } from '../actions'

const initialState = {
  busy: false,
  favourites: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_FAVOURITES_TYPE}_${ActionType.Pending}`:
      return {
        ...state,
        busy: true
      }
    case `${FETCH_FAVOURITES_TYPE}_${ActionType.Fulfilled}`:
      return {
        ...state,
        busy: false,
        error: undefined,
        favourites: action.payload
      }
    case `${FETCH_FAVOURITES_TYPE}_${ActionType.Rejected}`:
      return {
        ...state,
        busy: false,
        error: action.payload
      }
    case `${TOGGLE_FAVOURITE_TYPE}`:
      return {
        ...state,
        busy: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default reducer
