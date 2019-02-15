import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List'
import Contact from './pages/Contact'

const Router = () => (
  <main>
    <Switch basename={'/'}>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
      <Route exact path={`${process.env.PUBLIC_URL}/list`} component={List} />
      <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
    </Switch>
  </main>
)

export default Router
