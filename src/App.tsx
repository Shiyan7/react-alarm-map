import './style.scss'
import { setupStore } from './store/store'
import { Provider } from 'react-redux'
import { Map } from './components/Map/Map'
import { Menu } from './Menu/Menu'

export const App = () => {
  
  const store = setupStore()

  return (
    <Provider store={store}>
      <Map />
      <Menu />
    </Provider>
  )
}