import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from './Actions'
import { orderData } from './assets/orderData'

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest())
    if (orderData) dispatch(fetchProductsSuccess(orderData))
    else dispatch(fetchProductsFailure('error on fetching data'))
  }
}
