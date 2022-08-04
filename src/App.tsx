import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/footer/footer'
import Header from './components/layout/header/header'
import Menu from './components/main-menu/menu'
import MainPage from './pages/mainPage'
import TemplatePage from './pages/templatePage'
import routing from './routes/routes'
import createStore from './store/store'

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
                <Route
                  path={routing.home}
                  element={<MainPage title='Main page' />}
                />
                <Route
                  path={routing.login}
                  element={<TemplatePage title='Вход' />}
                />
                <Route
                  path={routing.basket}
                  element={<TemplatePage title='Корзина' />}
                />
                <Route
                  path='/services/:service'
                  element={<TemplatePage title='Сервис' />}
                />
                <Route
                  path='/lk/:page'
                  element={<TemplatePage title='Личный кабинет' />}
                />
                <Route path='/catalog/:category'>
                  <Route index element={<TemplatePage title='Категория' />} />
                  <Route path=':subcategory'>
                    <Route
                      index
                      element={<TemplatePage title='Подкатегория' />}
                    />
                    <Route path=':inner_subcategory'>
                      <Route
                        index
                        element={
                          <TemplatePage title='Внутренняя подкатегория' />
                        }
                      />
                    </Route>
                  </Route>
                </Route>
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
