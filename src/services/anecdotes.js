import axios from "axios"

const baseUrl = "http://localhost:3003/anecdotes"

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const create = async (content) => {
  const newAnecdote = {
    content,
    votes: 0
  }
  const res = await axios.post(baseUrl, newAnecdote)
  return res.data
}

const update = async (id, newObject) => {
  const res = await axios.put(`${baseUrl}/${id}`, newObject)
  return res.data
}

const myService = {
  getAll, create, update
}

export default myService
