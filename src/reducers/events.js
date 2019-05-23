import { EVENTS_FETCHED } from '../actions/events'

export const events = (state = null, action) => {
  switch(action.type) {
    case EVENTS_FETCHED: 
      return action.events
    default: return state
  }
}