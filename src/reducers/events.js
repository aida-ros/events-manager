import { EVENTS_FETCHED, EVENT_CREATE_SUCCESS, EVENT_DELETE_SUCCESS } from '../actions/events'

export const events = (state = null, action) => {
  switch(action.type) {
    case EVENTS_FETCHED: 
      return action.events
    case EVENT_CREATE_SUCCESS:
      return [...state, action.event]
    case EVENT_DELETE_SUCCESS:
      return state.filter(event => {
        if (event.id !== action.id)
          return event
      })
    default: return state
  }
}
