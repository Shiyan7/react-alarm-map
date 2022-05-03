import './style.scss'
import { setupStore } from './store/store'
import { Provider } from 'react-redux'
import { Map } from './components/Map/Map'
import { Menu } from './Menu/Menu'
import { Burger } from './Menu/Burger'

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