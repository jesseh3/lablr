import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],
  displayName: 'PublicPage',
  render () {
    const {repos} = this.props
    return (
      <div>
        <h1>Repos Page</h1>
        <div>
          {repos.map((repo) => {
              return (
                <div>
                  <a href="#" style={{fontSize: '45px'}}>
                    {repo.full_name}
                  </a>
                </div>
              )
          })}
        </div>
      </div>
    )
  }
})
