import React, { Component } from 'react'
import EventForm from './EventForm'

export default class EventDetails extends Component {
  render() {
    const { event } = this.props
    const onDelete = this.props.onDelete
    const editMode = this.props.editMode
    console.log(editMode)

    const onEdit = this.props.onEdit

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
        <br/>
        {editMode === true && 
          <EventForm 
            values={this.props.formValues}
            onSubmit={this.props.onSubmit}
           />}
        <button onClick={onEdit}>Edit</button>
      </div>
      
        
    )
  }
}