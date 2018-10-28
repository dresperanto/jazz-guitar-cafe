import React, { Component } from 'react'
import { db } from '../../firebase'
import FontAwesome from 'react-fontawesome';
import Guitarist from '../Guitarist/Guitarist'
import '../SearchBar/SearchBar.css'

class GuitaristsAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allGuitarists: [],
      search: '',
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

  // Delete guitarist. id comes from Guitarist component
  deleteGuitarist = (id) => {
    db
      .collection('guitarists')
      .doc(id)
      .delete()
    console.log('Delete Guitarist');
  }


  onChange = (e) => {
    this.setState({ search: e.target.value })
  }



  render() {
    // Destructure state
    const { allGuitarists, search } = this.state;
    const filteredGuitarists = allGuitarists.filter(guitarist => {
      return guitarist.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })

    return (
      <React.Fragment>

        <div className="rmdb-searchbar">
          <div className="rmdb-searchbar-content">
            <FontAwesome className="rmdb-fa-search" name="search" size="2x" />
            <input
              type="text"
              className="rmdb-searchbar-input"
              placeholder="Search Jazz Guitarists"
              onChange={this.onChange}
              value={this.state.value}
            />
          </div>
        </div>

        <div>
          {
            // Map through the allGuitarists state and display the entire Guitarist component (not just specific fields, e.g. lesson.title etc.
            filteredGuitarists.map(guitarist =>

              <div key={guitarist.id}>
                <Guitarist
                  guitarist={guitarist}
                  deleteClickHandler={this.deleteGuitarist.bind(this, guitarist.id)}
                />
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

