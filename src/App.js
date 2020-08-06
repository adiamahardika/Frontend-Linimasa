import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import { routes } from './components/helpers/routes.json'
import store from './components/redux/store'
import ads from './components/dashboard/ads/ads'
export default function App() {
  return(
    <Provider store={store}>
      <Router>
        <div>
          <Route path={routes.ads} component={ads}/>
        </div>
      </Router>
    </Provider>
  )
}