import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import DetailsPage from '../pages/DetailsPage'

export const App: React.FC = ({}) => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <HomePage />} />
      <Route path="/:cat" render={() => <DetailsPage />} />
    </Switch>
  </Router>
)

export default App
