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
        console.log(response.body)
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
        console.log(response.body)
        dispatch(eventCreateSuccess(response.body))
      })
      .catch(console.error)
  }
}

export const EVENT_FETCHED = 'EVENT_FETCHED'

const eventLoadSuccess = event => ({
  type: EVENT_FETCHED,
  event
})

export const loadEvent = (id) => (dispatch) => {
  request(`${baseUrl}/events/${id}`)
    .then(response => {
      console.log(response.body)
      dispatch(eventLoadSuccess(response.body))
    })
    .catch(console.error)
}

export const EVENT_DELETE_SUCCESS = 'EVENT_DELETE_SUCCESS'

const eventDeleteSuccess = (id) => ({
  type: EVENT_DELETE_SUCCESS,
  id
})

export const deleteEvent = (id) => (dispatch) => {
  request
    .delete(`${baseUrl}/events/${id}`)
    .then(dispatch(eventDeleteSuccess(id)))
}