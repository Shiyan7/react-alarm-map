import './style.scss'
import { setupStore } from './store/store'
import { Provider } from 'react-redux'
import { Map } from './components/Map/Map'
import { Menu } from './components/Menu/Menu'
import { Burger } from './components/Burger/Burger'

export const App = () => {
  
  const store = setupStore()

  return (
    <Provider store={store}>
      <Map />
      <Burger />
      <Menu />
    </Provider>
  )
}