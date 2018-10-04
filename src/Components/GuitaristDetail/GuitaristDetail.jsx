import React, { Component } from 'react'
import { db } from '../../firebase'
import { Link } from 'react-router-dom'

class GuitaristDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: '',
      name: '',
      data: '',
      isLoaded: false,
      users: [],
      summary: '',
      photo: ''
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    db.collection("guitarists").doc(id)
      .get()
      .then(doc => this.setState({ profile: doc.data() }));
    this.fetchPlaceholderData();

  }

  componentDidUpdate() {
    this.fetchFmData();
  }

  fetchPlaceholderData() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data, isLoaded: true }));
  }

  fetchFmData() {
    fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.state.profile.firstName}+${this.state.profile.lastName}&api_key=00982ad857ff6c4f4fd30248059b96b6&format=json`)
      .then(response => response.json())
      .then(data => this.setState({
        name: data.artist.name,
        summary: data.artist.bio.summary,
        photo: data.artist.image[2]['#text'],
        isLoaded: true
      }))
      .catch(error => console.log('Parsing failed', error))
  }





  render() {

    const { profile, users, name, summary, photo, isLoaded } = this.state

    if (!isLoaded) {
      return <div className="ui active centered inline loader"></div>
    }

    else {

      return (
        <div className="ui raised very padded text container segment" style={{ marginTop: "30px" }}>
          <h1>Details | <Link to="/guitarists">All Guitarists</Link></h1>
          <h3>{name}</h3>

          <img className="ui small rounded left floated image" src={photo} alt={name} />
          <p>{summary}</p>

          <p><a href={profile.website}>Website</a></p>



          <h4 className="ui horizontal divider header">
            <i className="music icon"></i>
            Recordings
          </h4>

          <ul>

            {users.map(user => (
              <li key={user.id}>
                {user.name} | {user.email}</li>
            ))}

          </ul>

          <p><small><strong>ID:</strong>{this.props.match.params.id}</small></p>
        </div>
      );
    }
  }
}

export default GuitaristDetail