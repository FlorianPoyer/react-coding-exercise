/* global fetch:false */
import { fetchFavouritesActionCreator, TOGGLE_FAVOURITE_TYPE, REHYDRATED } from '../actions'
import { getFavouritesApiUrl } from '../selectors'

const modifyFavourites = async (apiUrl, entityId, isFavourite = false) => {
  const url = `${apiUrl}/${entityId}`
  const favourites = isFavourite ? await deleteFavourite(url) : await putFavourite(url)
  return favourites
}

const putFavourite = async (url) => {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json'
    },
    method: 'PUT'
  })

  const favourites = await response.json()

  if (!response.ok || !favourites) {
    const error = 'Failed to add to the list of favourites'
    error.status = response.status
    throw error
  }

  return favourites
}

const deleteFavourite = async (url) => {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json'
    },
    method: 'DELETE'
  })

  const favourites = await response.json()

  if (!response.ok || !favourites) {
    const error = 'Failed to delete to the list of favourites'
    error.status = response.status
    throw error
  }

  return favourites
}

const fetchFavourites = async (apiUrl) => {
  const response = await fetch(apiUrl, {
    headers: {
      Accept: 'application/json'
    }
  })

  const favourites = await response.json()

  if (!response.ok || !favourites) {
    const error = 'Failed to fetch favourites'
    error.status = response.status
    throw error
  }

  return favourites
}

export default store => next => action => {
  const ret = next(action)
  const state = store.getState()
  const apiUrl = getFavouritesApiUrl(state)

  if (action.type === TOGGLE_FAVOURITE_TYPE) {
    const entityId = action.payload.entityId
    const isFavourite = state.favourites.favourites.includes(entityId)
    store.dispatch(fetchFavouritesActionCreator(modifyFavourites(apiUrl, entityId, isFavourite)))
  } else if (action.type === REHYDRATED) {
    store.dispatch(fetchFavouritesActionCreator(fetchFavourites(apiUrl)))
  }

  return ret
}
