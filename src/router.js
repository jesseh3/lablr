import app from 'ampersand-app'
import React from 'react'
import qs from 'qs'
import uuid from 'node-uuid'
import xhr from 'xhr'
import Router from 'ampersand-router'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import Layout from './layout'

export default Router.extend({
  renderPage (page, opts = {layout: true}) {
    if (opts.layout)
    {
      page = (
        <Layout>
        {page}
        </Layout>
      )
    }
    React.render(page, document.body)
  },
  routes: {
    '': "public",
    "repos": "repos",
    "login": "login",
    "logout": "logout",
    /* :query is grabbing the entire query string following "?" and passing to "authCallback" */
    "auth/callback?:query": "authCallback"
  },

  public () {
    this.renderPage(<PublicPage/>, {layout: false})
  },

  repos (){
    this.renderPage(<ReposPage/>)
  },

  login () {
    const state = uuid()
    window.localStorage.state = state
    window.location = "https://github.com/login/oauth/authorize?"
    +  qs.stringify({
      client_id: "a7ef50bbbe6cc8e4480c",
      redirect_uri: window.location.origin + "/auth/callback",
      scope: "user,repo",
      state: state
    })
  },

  logout () {

  },

  authCallback (query) {
    query = qs.parse(query)
    if (query.state === window.localStorage.state) {
        delete window.localStorage.state
        xhr({
            url: "https://lablr-gatekeeper-aaa.herokuapp.com/authenticate/" + query.code
          },
          (err, resp, body) => {
            console.log(body);
          }
        )
    }

  }
})
