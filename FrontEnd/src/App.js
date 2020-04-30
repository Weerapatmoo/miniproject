import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Table from './components/Table'
import { Provider } from "react-redux";
import Store from './redux/Store'

export default function App(props) {
  return (
    <div>
      <Provider store={Store}>
        <Router>
        <Switch>
        
          <Route path='/' exact component={Home}/>
          <Route path='/About' exact component={About}/>
          <Route path='/Table' exact component={Table}/>
       
        </Switch>
        </Router>
      </Provider>
      
    </div>
  )
}
