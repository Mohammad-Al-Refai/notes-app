import { del, get ,post} from './Api_helper'

export async function getUserData() {
 
  let response = await get('/user/dashboard',{token:localStorage.getItem("token")} )
  return response
}

export async function addNewNote(title, description) {
  let body = {
    title,
    description,
  }
  let response = await post('/note/add-new', body)
  return response
}
export async function updateNote(uid,id,title, description) {
  let body = {
    id,
    uid,
    title,
    description,
  }
  let response = await post('/note/update', body)
  return response
}
export async function deleteNote(id) {
  
  let response = await del('/note/delete/'+id)
  return response
}
