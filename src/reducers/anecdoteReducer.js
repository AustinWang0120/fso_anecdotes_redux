import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdotes"

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    voteFor(state, action) {
      const id = action.payload
      const itemToChange = state.find(item => item.id === id)
      const changedItem = { ...itemToChange, votes: itemToChange.votes + 1 }
      return state.map(item => item.id === id ? changedItem : item)
    },
    pushAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { voteFor, pushAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const createdAnecdote = await anecdoteService.create(content)
    dispatch(pushAnecdote(createdAnecdote))
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const id = anecdote.id
    const newAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const updatedAnecdote = await anecdoteService.update(id, newAnecdote)
    dispatch(voteFor(updatedAnecdote.id))
  }
}

export default anecdoteSlice.reducer
