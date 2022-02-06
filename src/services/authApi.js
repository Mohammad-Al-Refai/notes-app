import { post } from './Api_helper'

export async function login(userName, pin) {
  let body = {
    userName,
    pin,
  }
  let response = await post('/user/login', body)
  return response
}

export async function register(userName, pin) {
  let body = {
    userName,
    pin,
  }
  let response = await post('/user/register', body)
  return response
}
