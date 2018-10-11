import React, { Component } from 'react'
import { db } from '../../firebase'
import Guitarist from '../Guitarist/Guitarist'

class GuitaristsAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allGuitarists: [],
      isLoaded: false

    }
  }

  // Get a snapshot of the collection 'lessons' from Firestore and set state
  componentDidMount() {
    db.collection('guitarists').orderBy("firstName")
      .onSnapshot(collection => {
        const allGuitarists = collection.docs.map(doc => doc.data())
        this.setState({ allGuitarists, isLoaded: true })
        console.log(this.props.match)
      });
  }


  deleteGuitarist = (id) => {
    db
      .collection('guitarists')
      .doc(id)
      .delete()
    console.log('Delete Guitarist');
  }


  render() {
    // Destructure state
    const { allGuitarists } = this.state;


    return (
      <React.Fragment>
        <div>
          {
            // Map through the allGuitarists state and display the entire Instructor component (not just specific fields, e.g. lesson.title etc.
            allGuitarists.map(guitarist =>

              <div key={guitarist.id}>
                <Guitarist
                  guitarist={guitarist}
                  deleteClickHandler={this.deleteGuitarist.bind(this, guitarist.id)}
                />
                {/* <button className="ui right floated red button"
                  onClick={() =>
                    db
                      .collection('guitarists')
                      .doc(guitarist.id)
                      .delete()}>Delete
                </button> | 
                <Link style={{ color: 'blue' }} to={`/guitarists/${guitarist.id}`}>Details</Link>*/}
                <hr />
              </div>
            )
          }
        </div>

      </React.Fragment>
    );
  }
}

export default GuitaristsAll;

