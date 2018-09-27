import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import LessonForm from '../LessonForm/LessonForm'
import LessonList from '../LessonList/LessonList'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/lessons" component={LessonList} />
      <Route path="/add" component={LessonForm} />
    </Switch>
  </main>
)

export default Main