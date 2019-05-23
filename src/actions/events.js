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
        dispatch(eventsFetched(response.body))
      })
      .catch(console.error)
  }

}

export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCES'

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
})

export const createEvent = (data) => {
  console.log("DATA was DISPATCHED")
  return dispatch => {
    request
      .post(`${baseUrl}/events`)
      .send(data)
      .then(response => {
        dispatch(eventCreateSuccess(response.body))
      })
      .catch(console.error)
  }
}