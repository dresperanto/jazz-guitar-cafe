import React, { Component } from 'react'
import { db } from '../../firebase'
import { Link, Route } from "react-router-dom";
import Lesson from '../Lesson/Lesson'
import LessonDetail from '../LessonDetail/LessonDetail'

class InstructorsAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allLessons: []
    }
  }

  // Get a snapshot of the collection 'lessons' from Firestore and set state
  componentDidMount() {
    db.collection('lessons')
      .onSnapshot(collection => {
        const allLessons = collection.docs.map(doc => doc.data())
        this.setState({ allLessons })
        console.log(this.props.match)
      })
  }

  deleteLesson = (id) => {
    db
      .collection('lessons')
      .doc(id)
      .delete()
    console.log('Delete Lesson');
  }


  render() {
    // Destructure state
    const { allLessons } = this.state;


    return (
      <React.Fragment>
        <h1>All Instructors</h1>
        <div>
          {
            // Map through the allLessons state and display the entire Instructor component (not just specific fields, e.g. lesson.title etc.
            allLessons.map(lesson =>
              <div key={lesson.id}>
                <Lesson
                  lesson={lesson}
                  deleteClickHandler={this.deleteLesson.bind(this, lesson.id)}
                />
                <button
                  onClick={() =>
                    db
                      .collection('lessons')
                      .doc(lesson.id)
                      .delete()}>Delete</button> |
                <button>
                  <Link to={lesson.id}>Edit</Link>
                  <Route path={"lessons/:id"} component={LessonDetail} />
                </button>
                <hr />
              </div>
            )
          }
        </div>

      </React.Fragment>
    );
  }
}

export default InstructorsAll;

