import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/footer/footer'
import Header from './components/layout/header/header'
import MainPage from './pages/mainPage'
import createStore from './store/store'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={createStore()}>
        <div className='wrapper'>
          <Header />
          <main className='content'>
            <div className='container'>
              <Routes>
                <Route path='/' element={<MainPage />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
