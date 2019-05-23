import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventsList extends Component {
  render() {
    const { events } = this.props
    console.log("THIS.PROPS.EVENTS", events)

    const showEvents = (events) => {
      if (!events) {
        return <h2>Loading...</h2>
      }
      return events.map(event => <li key={event.id}><Link to={`events/:id`}>{event.name}</Link></li>)
    }
    return (
      <ul>
        {showEvents(events)}
      </ul>
    )
  }
}