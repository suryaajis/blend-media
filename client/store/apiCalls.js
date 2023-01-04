import { baseUrl } from "../api/server"
import axios from "axios"
import { updateListProducts } from "./productSlice"

export const fetchProducts = async (page, dispatch) => {
  try {
    const { data } = await axios({
      url: `${baseUrl}/product?page=${page}`,
      method: "GET"
    })

    dispatch(updateListProducts(data))
  } catch (err) {
    console.log(err)
  }
}