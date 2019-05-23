import React, { Component } from 'react'
import { loadEvents } from '../actions/events'
import { connect } from 'react-redux'
import EventsList from './EventsList.js'

class EventsListContainer extends Component {
  componentDidMount() {
    this.props.loadEvents()
    console.log('is this called?')
  }
  
  render() {
    return <EventsList events={this.props.events}/>
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, { loadEvents })(EventsListContainer)