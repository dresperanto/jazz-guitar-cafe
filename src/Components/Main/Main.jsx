import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import LessonForm from '../LessonForm/LessonForm'
import LessonList from '../LessonList/LessonList'
import LessonDetail from '../LessonDetail/LessonDetail'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/lessons" component={LessonList} />
      <Route path="/add" component={LessonForm} />
      <Route path="/instructors/:id" component={LessonDetail} />
    </Switch>
  </main>
)

export default Main