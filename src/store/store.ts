import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  
})

const createStore = (initialState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  })
}

export default createStore

export type AppState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = AppStore['dispatch']
