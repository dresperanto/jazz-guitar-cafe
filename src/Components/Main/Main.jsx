import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import GuitaristForm from '../GuitaristForm/GuitaristForm'
import GuitaristList from '../GuitaristList/GuitaristList'
import GuitaristDetail from '../GuitaristDetail/GuitaristDetail'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/guitarists" component={GuitaristList} />
      <Route path="/add" component={GuitaristForm} />
      <Route path="/guitarists/:id" component={GuitaristDetail} />
      <Route path="/edit/:id" component={GuitaristForm} />
    </Switch>
  </main>
)

export default Main