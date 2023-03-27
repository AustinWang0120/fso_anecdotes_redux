import { useSelector, useDispatch } from "react-redux"
import { voteFor } from '../reducers/anecdoteReducer'
import { removeNotification, setNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
  const dispatch = useDispatch()  
  const anecdotes = useSelector(({ anecdotes, filter }) => anecdotes.filter(item => item.content.toLowerCase().includes(filter.toLowerCase())).sort((a, b) => {
    if (a.votes < b.votes) {
      return 1
    } else if (a.votes > b.votes) {
      return -1
    } else {
      return 0
    }
  }))

  const vote = (id, content) => {
    dispatch(voteFor(id))
    dispatch(setNotification(`You voted for ${content}`))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }
  
  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
