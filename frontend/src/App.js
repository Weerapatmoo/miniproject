import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Table from './components/Table'


function App () {
  return (
    <div>
      
        <Router>
        <Switch>
        
          <Route path='/' exact component={Home}/>
          <Route path='/About' exact component={About}/>
          <Route path='/Table' exact component={Table}/>
       
        </Switch>
        </Router>
      
      
    </div>
  )
}
export default  App