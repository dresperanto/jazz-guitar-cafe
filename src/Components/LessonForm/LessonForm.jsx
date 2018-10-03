import React, { Component } from 'react';
import { db } from '../../firebase'

class LessonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      url: '',
      description: '',
    };
  }


  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  addData = e => {
    e.preventDefault();
    const newLesson = db.collection('lessons').doc()

    newLesson.set({
      // Set Id to Firestore Document Name
      id: newLesson.id,
      title: this.state.title,
      url: this.state.url,
      description: this.state.description
    });
    this.setState({
      id: '',
      title: '',
      url: '',
      description: ''
    });
  };



  render() {
    return (
      <div className="ui raised very padded text container segment" style={{ marginTop: "30px" }}>
        <header className="App-header">

          <h1 className="App-title">{this.state.name}</h1>
        </header>


        <form onSubmit={this.addData} className="ui form">

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

      </div>
    );
  }
}

export default LessonForm;
