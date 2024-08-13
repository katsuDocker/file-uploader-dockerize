import { ErrorPage } from './errors'
import { HomePage } from './home'

export function Controller(app) {
  HomePage(app)
  ErrorPage(app)
}
