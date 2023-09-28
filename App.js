import { Provider } from 'react-redux'
import store from './store'
import Header from './components/Header'
import NavigationHeader from './components/navigationHeader'
import ProductStatus from './components/productStatus'
import ProductsTable from './components/ProductsTable'

function App() {
  return (
    <Provider store={store}>
      <NavigationHeader />
      <Header />
      <ProductStatus />
      <ProductsTable />
    </Provider>
  )
}

export default App
