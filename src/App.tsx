import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/footer/footer'
import Header from './components/layout/header/header'
import Menu from './components/main-menu/menu'
import ProductPage from './pages/productPage/productPage'
import CatalogPage from './pages/catalogPage/catalogPage'
import MainPage from './pages/mainPage/mainPage'
import TemplatePage from './pages/templatePage'
import routing from './routes/routes'
import createStore from './store/store'
import BasketPage from './pages/basketPage/basketPage'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={createStore()}>
        <div className='wrapper'>
          <Header />
          <Menu />
          <main className='content'>
            <div className='container'>
              <Routes>
                <Route path={routing.home} element={<MainPage />} />
                <Route
                  path={routing.login}
                  element={<TemplatePage title='Вход' />}
                />
                <Route path={routing.basket} element={<BasketPage />} />
                <Route
                  path='/services/:service'
                  element={<TemplatePage title='Сервис' />}
                />
                <Route
                  path='/lk/:page'
                  element={<TemplatePage title='Личный кабинет' />}
                />
                <Route path='/catalog/:category'>
                  <Route index element={<CatalogPage />} />
                  <Route path=':subCategory'>
                    <Route index element={<CatalogPage />} />
                    <Route path=':innerSubCategory'>
                      <Route index element={<CatalogPage />} />
                    </Route>
                  </Route>
                </Route>
                <Route path='product/:id' element={<ProductPage />} />
                <Route />
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
