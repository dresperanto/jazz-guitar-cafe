import React from 'react';
import fire from "./fire";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      startDate: '',
      title: '',
      url: '',
      description: '',
      allData: []
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addData = e => {
    e.preventDefault();
    const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection('lessons').add({
      title: this.state.title,
      url: this.state.url,
      description: this.state.description
    });
    this.setState({
      title: '',
      url: '',
      description: ''
    });
  };

  getData = () => {
    const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    var wholeData = []
    db.collection('lessons').orderBy('title', 'asc').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          // console.log(doc.id, '=>', doc.data());
          // console.log(doc.data().name + doc.data().age);
          console.log(doc.data());
          wholeData.push(doc.data())
        });
        console.log(wholeData)
        this.setState({ allData: wholeData })
        console.log(this.state.allData)
      })
      .catch(error => {
        console.log('Error!', error);
      })
  }

  handleChange(date) {
    this.setState({ startDate: date })
  }

  render() {

    var listOfData = this.state.allData.map((val, i) => {
      var title = val.title
      var description = val.description
      var url = val.url
      var key = val.id
      return (
        <div key={key} class="ui middle aligned divided list">
          <div className="item">
            <div className="right floated content">
              <div className="ui button">Edit</div>
            </div>
            <img className="ui avatar image" src="/images/lena.png" />
            <div className="content">
              {title} {url}<br />
            </div>
          </div>
        </div>


        // <li key={i}>{title} <a href={url}>{url}</a><br /></li>
      )
    })

    return (
      <div className="ui raised very padded text container segment" style={{ marginTop: "30px" }}>

        <h2>Add an Instructor</h2>
        <form onSubmit={this.addData} className="ui form">
          <DatePicker
            name="startDate"
            selected={this.state.startDate}
            onChange={this.handleChange}
            placeholderText="Click to select a date"
            value={this.state.startDate}
          />
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={this.updateInput}
              value={this.state.title}
            />
          </div>

          <div className="field">
            <label>URL</label>
            <input
              type="text"
              name="url"
              placeholder="URL"
              onChange={this.updateInput}
              value={this.state.url}
            />
          </div>

          <div className="field">
            <label>Description</label>
            <input
              type="text"
              name="description"
              placeholder="Title"
              onChange={this.updateInput}
              value={this.state.description}
            />
          </div>

          <button className="ui button" type="submit">Submit</button>
        </form>

        <h4 className="ui horizontal divider header">
          <i className="tag icon"></i>
          Lesson Providers
        </h4>

        <button onClick={this.getData} className="positive ui button">List lesson providers</button>

        <ul>{listOfData}</ul>

      </div>
    );
  }
}

export default App;