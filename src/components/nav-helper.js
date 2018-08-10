import app from 'ampersand-app'
import React from 'react'
import locallinks from 'local-links'

export default React.createClass({
  displayName: 'NavHelper',
  
  onClick (event) {
    // if it is NOT a local pathname, pathname will be null
    const pathname = locallinks.getLocalPathname(event)
    
    if (pathname) {
      event.preventDefault()
      app.router.history.navigate(pathname)
    }
  },
  
  render () {
    return (
      <div {...this.props} onClick={this.onClick}>
        {this.props.children}
      </div>
    )
  }
})