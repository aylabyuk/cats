import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import DetailsPage from '../pages/DetailsPage'
import useStyles from './useStyles'

export const App: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route path="/:catId" render={() => <DetailsPage />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
