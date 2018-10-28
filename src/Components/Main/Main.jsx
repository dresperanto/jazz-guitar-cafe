import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import GuitaristForm from '../GuitaristForm/GuitaristForm'
import GuitaristEditForm from '../GuitaristEditForm/GuitaristEditForm'
import GuitaristList from '../GuitaristList/GuitaristList'
import GuitaristDetail from '../GuitaristDetail/GuitaristDetail'
import GuitaristDeck from '../GuitaristDeck/GuitaristDeck'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/guitarists" component={GuitaristList} />
      <Route path="/add" component={GuitaristForm} />
      <Route path="/guitarists/:id" component={GuitaristDetail} />
      <Route path="/edit/:id" component={GuitaristEditForm} />
      <Route path="/deck" component={GuitaristDeck} />
    </Switch>
  </main>
)

export default Main