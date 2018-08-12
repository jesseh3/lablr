import app from 'ampersand-app'
import React from 'react'
import qs from 'qs'
import uuid from 'node-uuid'
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
    /* :code is grabbing the string following "=" and passing to "authCallback" */
    "auth/callback?code=:code": "authCallback"
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

  authCallback (code) {
    console.log(code);
  }
})
