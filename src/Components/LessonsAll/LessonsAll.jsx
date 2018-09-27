import React, { Component } from 'react'
import { db } from "../../firebase";

class InstructorsAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allLessons: []
    };
  }

  componentDidMount() {
    var wholeData = []
    db.settings({ timestampsInSnapshots: true });
    db.collection('lessons').orderBy('title', 'asc').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.data());
          wholeData.push(doc.data())
        });
        console.log(wholeData)
        this.setState({ allLessons: wholeData })
        console.log(this.state.allLessons)
      })
      .catch(error => {
        console.log('Error!', error);
      })
  }


  render() {
    const listOfData = this.state.allLessons.map((val, index) => {
      var title = val.title
      var url = val.url
      var key = index
      return (
        <li
          key={key}> <strong>{title}</strong>  <a href={url}>{url}</a> | Edit
        </li>
      )
    })


    return (
      <div>
        <ul>{listOfData}</ul>
      </div>
    );
  }
}

export default InstructorsAll;
