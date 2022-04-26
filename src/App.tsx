
import { setupStore } from './store/store'
import { Provider } from 'react-redux'
import { Map } from './components/Map/Map'
import './style.css'

export const App = () => {
  
  const store = setupStore()

  return (
    <Provider store={store}>
      <Map />
    </Provider>
  )
}