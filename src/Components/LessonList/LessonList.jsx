import React, { Component } from 'react';
import LessonsAll from '../LessonsAll/LessonsAll'



class LessonList extends Component {


  render() {

    return (
      <div className="ui raised very padded text container segment" style={{ marginTop: "30px" }}>
        <h2>Instructor List</h2>
        <LessonsAll />
      </div>
    );
  }
}

export default LessonList;