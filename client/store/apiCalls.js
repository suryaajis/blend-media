import { baseUrl } from "../api/server"
import axios from "axios"
import { updateListProducts, updateDetailProduct } from "./productSlice"
import { setToken, setUser, updateListUsers } from "./userSlice"
import { updateListFavs } from "./favoriteSlice"
import { updateListCarts } from "./cartSlice"


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

    dispatch(updateDetailProduct(data))
  } catch (err) {
    console.log(err)
  }
}

export const createProduct = async (payload, dispatch) => {
  try {
    const access_token = localStorage.getItem("access_token")
    const { data } = await axios({
      url: `${baseUrl}/product`,
      method: "POST",
      data: payload,
      headers: { access_token }
    })

    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

export const deleteProduct = async (id) => {
  try {
    const access_token = localStorage.getItem("access_token")
    const { data } = await axios({
      url: `${baseUrl}/product/${id}`,
      method: "DELETE",
      headers: {
        access_token
      }
    })

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export const fetchUsers = async (dispatch) => {
  try {
    const access_token = localStorage.getItem("access_token")
    const { data } = await axios({
      url: `${baseUrl}/user`,
      method: "GET",
      headers: {
        access_token
      }
    })

    console.log(data, "list users")
    dispatch(updateListUsers(data))
  } catch (err) {
    console.log(err)
  }
}

export const deleteUser = async (id) => {
  try {
    const access_token = localStorage.getItem("access_token")
    const { data } = await axios({
      url: `${baseUrl}/user/${id}`,
      method: "DELETE",
      headers: {
        access_token
      }
    })

  } catch (error) {
    console.log(error)
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

  } catch (error) {
    console.log(error)
  }
}

export const editUser = async (id, payload) => {
  try {
    const access_token = localStorage.getItem("access_token")
    const { data } = await axios({
      url: `${baseUrl}/user/${id}`,
      method: "PUT",
      data: payload,
      headers: { access_token }
    })

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export const editProduct = async (id, payload) => {
  try {
    const access_token = localStorage.getItem("access_token")
    const { data } = await axios({
      url: `${baseUrl}/product/${id}`,
      method: "PUT",
      data: payload,
      headers: { access_token }
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

    dispatch(setUser(data))
  } catch (error) {
    console.log(error)
  }
}

export const fetchFavorites = async (dispatch) => {
  try {
    const access_token = localStorage.getItem("access_token")
    const { data } = await axios({
      url: `${baseUrl}/favorite`,
      method: "GET",
      headers: {
        access_token
      }
    })

    console.log(data, "list favorite")
    dispatch(updateListFavs(data))
  } catch (err) {
    console.log(err)
  }
}

export const createFavorite = async (payload, dispatch) => {
  try {
    const access_token = localStorage.getItem("access_token")
    const { data } = await axios({
      url: `${baseUrl}/favorite`,
      method: "POST",
      data: payload,
      headers: { access_token }
    })

    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

export const deleteFavorite = async (id) => {
  try {
    const access_token = localStorage.getItem("access_token")
    const { data } = await axios({
      url: `${baseUrl}/favorite/${id}`,
      method: "DELETE",
      headers: {
        access_token
      }
    })

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export const fetchCarts = async (dispatch) => {
  try {
    const access_token = localStorage.getItem("access_token")
    const { data } = await axios({
      url: `${baseUrl}/cart`,
      method: "GET",
      headers: {
        access_token
      }
    })

    console.log(data, "list favorite")
    dispatch(updateListCarts(data))
  } catch (err) {
    console.log(err)
  }
}

export const postCart = async (payload, dispatch) => {
  try {
    const access_token = localStorage.getItem("access_token")
    const { data } = await axios({
      url: `${baseUrl}/cart`,
      method: "POST",
      data: payload,
      headers: { access_token }
    })

    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

export const editCart = async (id, payload) => {
  try {
    const access_token = localStorage.getItem("access_token")
    const { data } = await axios({
      url: `${baseUrl}/cart/${id}`,
      method: "PUT",
      data: payload,
      headers: { access_token }
    })

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export const deleteCart = async (id) => {
  try {
    const access_token = localStorage.getItem("access_token")
    const { data } = await axios({
      url: `${baseUrl}/cart/${id}`,
      method: "DELETE",
      headers: {
        access_token
      }
    })

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}