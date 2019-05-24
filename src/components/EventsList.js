import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventsList extends Component {
  render() {
    const { events } = this.props

    const showEvents = (events) => {
      if (!events) {
        return <h2>Loading...</h2>
      }
      return events.map(event => <li key={event.id}><Link to={`events/${event.id}`}>{event.name}</Link></li>)
    }
    return (
      <ul>
        {showEvents(events)}
      </ul>
    )
  }
}