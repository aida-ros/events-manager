import request from 'superagent'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'

const baseUrl = 'http://localhost:4000'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
})

export const loadEvents = () => (dispatch, getState) => {
  if (getState().events) {
    return
  } else {
    request(`${baseUrl}/events`)
      .then(response => {
        console.log('is it fetched?')
        dispatch(eventsFetched(response.body))
      })
      .catch(console.error)
  }

}