import { useDispatch } from "react-redux"
import { setFilter } from "../reducers/filterReducer"

const FilterInput = () => {
  const dispatch = useDispatch()

  const style = {
    marginBottom: 10
  }
  
  return (
    <div style={style}>
      filter<input onChange={({ target }) => { dispatch(setFilter(target.value)) }} />
    </div>
  )
}

export default FilterInput
