import { createSlice } from "@reduxjs/toolkit";

const initialState = "This is a notication"

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    removeNotification(state) {
      return ""
    }
  }
})

export const { setNotification, removeNotification } = notificationSlice.actions

export const showThenHideNotification = (message, timeout) => {
  return dispatch => {
    dispatch(setNotification(message))
    setTimeout(() => {
      dispatch(removeNotification())
    }, timeout)
  }
}

export default notificationSlice.reducer
