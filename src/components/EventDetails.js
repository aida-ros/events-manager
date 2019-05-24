import React, { Component } from 'react'

export default class EventDetails extends Component {
  render() {
    const { event } = this.props
    const onDelete = this.props.onDelete

    return (
      <div>
        {!event && 'Loading details...'}
        {event && 
        <div className='event-information'>
          <h1>{event.name}</h1>
          <i>{event.date}</i>
          <p>{event.description}</p>
          </div>
        }
        <button onClick={onDelete}>Delete event</button>
      </div>
        
    )
  }
}