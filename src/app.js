import React from 'react'
import styles from './styles/main.styl'

const Hello = React.createClass({
  displayName: "Hello",
  render () {
    return <div><h1>Hello, {this.props.name}</h1></div>
  }
})

React.render(<Hello name="PEOPLE!"/>, document.body)