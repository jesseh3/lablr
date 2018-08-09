import styles from './styles/main.styl'
import Router from './router'

window.app = {
  init () {
    this. router = new Router()
    // history is a singleton that all routers reference
    this.router.history.start()
  }
}

window.app.init()