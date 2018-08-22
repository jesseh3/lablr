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
                <div key={repo.id}>
                  <a href={repo.app_url} style={{fontSize: '45px'}}>
                    <span className='octicon octicon-repo'></span>
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
