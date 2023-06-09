import { useSelector, useDispatch } from "react-redux"
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { showThenHideNotification } from "../reducers/notificationReducer"

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

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote))
    dispatch(showThenHideNotification(`You voted for ${anecdote.content}`, 3000))
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
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
