import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'

const Router = () => (
  <main>
    <Switch basename={'/'}>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
    </Switch>
  </main>
)

export default Router
