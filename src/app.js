import app from 'ampersand-app'
import styles from './styles/main.styl'
import Router from './router'

//expose app to browser console
window.app = app

app.extend({
  init () {
    this. router = new Router()
    // history is a singleton that all routers reference
    this.router.history.start()
  }
})

app.init()