import React from 'react';
import fire from "./fire";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      url: '',
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
      url: this.state.url
    });
    this.setState({
      title: '',
      url: ''
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

  render() {

    var listOfData = this.state.allData.map((val, i) => {
      var title = val.title
      var url = val.url
      return (
        <li key={i}>{title} <a href={url}>{url}</a></li>
      )
    })

    return (
      <div class="ui raised very padded text container segment">

        <h2>Add an Instructor</h2>
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

          <button className="ui button" type="submit">Submit</button>
        </form>

        {/* <form onSubmit={this.addData}>
          <input
            type="text"
            name="name"
            placeholder="Input your name..."
            onChange={this.updateInput}
            value={this.state.name}
          />
          <br />
          <input
            type="number"
            name="age"
            placeholder="Input your age..."
            onChange={this.updateInput}
            value={this.state.age}
          />
          <br />
          <button type="submit">Submit</button>
        </form> */}

        <h4 class="ui horizontal divider header">
          <i class="tag icon"></i>
          Lesson Providers
        </h4>

        <button onClick={this.getData} class="positive ui button">List lesson providers</button>

        <ul>{listOfData}</ul>

      </div>
    );
  }
}

export default App;