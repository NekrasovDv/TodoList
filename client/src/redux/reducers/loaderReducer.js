import loaderTypes from '../types/loaderTypes'
import initState from '../initState'

const loaderReducer = (state = initState.loader, action) => {
  switch (action.type) {
    case loaderTypes.LOADER_FALSE:
      return {
        ...state,
        [action.payload]: false,
      }

    case loaderTypes.LOADER_TRUE:
      return {
        ...state,
        [action.payload]: true,
      }

    default:
      return state
  }
}

export default loaderReducer
