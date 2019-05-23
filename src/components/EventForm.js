import React, { Component } from 'react'

export default class EventForm extends Component {
  render() {
    const onChange = this.props.onChange
    const onSubmit = this.props.onSubmit
    const { values } = this.props
    
    const valueKeys = Object.keys(values)
    const inputFields = 
      valueKeys.map(value => {
        return <label>{value}:
                 <input onChange={onChange} type="text" name={value} />
              </label>
        })
    
      
    return (
      <form onSubmit={onSubmit}>
        {inputFields}
        <input type="submit" value="Submit" />
      </form>
    )
  }
}