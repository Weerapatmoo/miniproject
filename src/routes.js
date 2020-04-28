import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'Home'
import Works from './pages/Works'
import Table from './pages/Table'
import About from './pages/About'

function Routes(){
return(
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/About" component={About} />
    <Route exact path="/Works" component={Works} />
    <Route exact path="/Table" component={Table} />
  </Switch>
)
}
export default Routes 