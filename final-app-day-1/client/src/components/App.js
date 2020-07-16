import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Switch, Route } from 'react-router-dom'

import Navigation from './ui/navbar'
import CoastersList from './coasters/Coaster-list/'
import CoasterDetail from './coasters/Coaster-detail/'


function App() {

  return (
    <>

      <Navigation />

      <Switch>
        <Route exact path="/coasters" render={() => <CoastersList />} />
        <Route path="/coasters/:coaster_id" render={props => <CoasterDetail {...props} />} />
      </Switch>

    </>

  )
}

export default App;
