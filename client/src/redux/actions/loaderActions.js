import loaderTypes from '../types/loaderTypes'

export const setLoaderFalse = (key) => ({
  type: loaderTypes.LOADER_FALSE,
  payload: key,
})

export const setLoaderTrue = (key) => ({
  type: loaderTypes.LOADER_TRUE,
  payload: key,
})
