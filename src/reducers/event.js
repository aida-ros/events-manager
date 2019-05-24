import { EVENT_FETCHED } from '../actions/events'

export const event = (state = null, action) => {
  switch(action.type) {
    case EVENT_FETCHED:
      return action.event
      
    default: return state
  }
}