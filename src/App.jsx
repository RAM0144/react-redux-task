import { Provider } from 'react-redux'
import './App.css'
import store from './store/store'
import Products from './Product/product'

function App() {


  return (
    <Provider store={store}>
      <Products />
    </Provider>
  )
}

export default App
