import { baseUrl } from "../api/server"
import axios from "axios"
import { updateListProducts, updateDetailProduct } from "./productSlice"

export const fetchProducts = async (payload, dispatch) => {
  try {
    let URL = `${baseUrl}/product?page=${payload.page}`
    if (payload.search) {
      URL += `&search=${payload.search}`
    }

    const { data } = await axios({
      url: URL,
      method: "GET"
    })

    dispatch(updateListProducts(data))
  } catch (err) {
    console.log(err)
  }
}

export const getDetailProduct = async (id, dispatch) => {
  try {
    
    const { data } = await axios({
      url: `${baseUrl}/product/${id}`,
      method: "GET"
    })

    console.log(data)
    dispatch(updateDetailProduct(data))
  } catch (err) {
    console.log(err)
  }
}