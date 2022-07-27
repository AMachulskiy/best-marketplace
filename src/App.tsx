import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/mainPage'
import createStore from './store/store'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={createStore()}>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
