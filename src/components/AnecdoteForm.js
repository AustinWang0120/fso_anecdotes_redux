import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { removeNotification, setNotification } from "../reducers/notificationReducer"
import anecdoteService from "../services/anecdotes"

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ""
    // backend
    const createdAnecdote = await anecdoteService.create(content)
    // frontend
    dispatch(createAnecdote(createdAnecdote))
    // notification
    dispatch(setNotification(`You created ${createdAnecdote.content}`))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 3000)
  }
  
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='content' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
