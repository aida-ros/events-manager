import { EVENT_FETCHED, EVENT_UPDATE_SUCCESS } from '../actions/events'

export const event = (state = null, action) => {
  switch(action.type) {
    case EVENT_FETCHED:
      return action.event
    case EVENT_UPDATE_SUCCESS:
      return action.data
      
    default: return state
  }
}