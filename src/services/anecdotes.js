import axios from "axios"

const baseUrl = "http://localhost:3003/anecdotes"

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const myService = {
  getAll
}

export default myService
