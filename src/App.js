import Notification from './components/Notification'
import FilterInput from './components/FilterInput'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <FilterInput />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
