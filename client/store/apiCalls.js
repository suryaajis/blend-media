import { baseUrl } from "../api/server"
import axios from "axios"
import { updateListProducts, updateDetailProduct } from "./productSlice"
import { setToken, setUser } from "./userSlice"

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

export const loginUser = async (payload, dispatch) => {
  try {
    const { data } = await axios({
      url: `${baseUrl}/login`,
      method: "POST",
      data: {
        email: payload.email,
        password: payload.password
      }
    })
    
    localStorage.setItem("access_token", data.access_token)
    setToken(data.access_token)
  } catch (error) {
    console.log(error)
  }
}

export const registerUser = async (payload, dispatch) => {
  try {
    const { data } = await axios({
      url: `${baseUrl}/register`,
      method: "POST",
      data: {
        name: payload.name,
        email: payload.email,
        password: payload.password,
        role: "customer"
      }
    })
    
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export const getUserLogin = async (dispatch) => {
  try {
    const access_token = localStorage.getItem("access_token")
    const { data } = await axios({
      url: `${baseUrl}/user-login`,
      method: "GET",
      headers: {
        access_token
      }
    })
    
    console.log(data)
    dispatch(setUser(data))
  } catch (error) {
    console.log(error)
  }
}