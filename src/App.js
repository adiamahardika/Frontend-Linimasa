import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import { routes } from './components/helpers/routes.json'
import store from './components/redux/store'
import ads from './components/dashboard/ads/ads'
import news_category from './components/dashboard/news_category/news_category'
export default function App() {
  return(
    <Provider store={store}>
      <Router>
        <div>
          <Route path={routes.ads} component={ads}/>
          <Route path={routes.news_category} component={news_category}/>
        </div>
      </Router>
    </Provider>
  )
}