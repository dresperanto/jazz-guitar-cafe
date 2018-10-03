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
      <Route path="/guitarists" component={GuitaristList} />
      <Route path="/add" component={GuitaristForm} />
      <Route path="/instructors/:id" component={GuitaristDetail} />
    </Switch>
  </main>
)

export default Main