import React, { Component } from 'react'
import { db } from '../../firebase'
import { Link } from 'react-router-dom'

class GuitaristDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: '',
      name: '',
      summary: '',
      photo: '',
      topAlbums: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    db.collection("guitarists").doc(id)
      .get()
      .then(doc => this.setState({ profile: doc.data() }));

  }

  componentDidUpdate() {
    this.fetchArtistData()
    this.fetchAlbumData()
  }

  // fetchPlaceholderData() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(data => this.setState({ users: data, isLoaded: true }));
  // }


  fetchArtistData() {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.state.profile.firstName}+${this.state.profile.lastName}&api_key=00982ad857ff6c4f4fd30248059b96b6&format=json`)
      .then(response => response.json())
      .then(data => this.setState({
        name: data.artist.name,
        summary: data.artist.bio.summary,
        photo: data.artist.image[2]['#text'],
        isLoaded: true

      }))
      .catch(error => console.log('Parsing failed', error))
  }

  fetchAlbumData() {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.state.profile.firstName}+${this.state.profile.lastName}&api_key=00982ad857ff6c4f4fd30248059b96b6&format=json`)
      .then(response => response.json())
      .then(data => this.setState({ topAlbums: data.topalbums.album }))
      .catch(error => console.log('Parsing failed', error))
  }




  render() {

    const { profile, name, summary, photo, topAlbums, isLoaded } = this.state

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

            {topAlbums.map(album => (

              <div className="ui list">
                <div className="item">
                  <img className="ui rounded image" src={album.image[0]['#text']} alt="album cover" />
                  <div className="content">
                    <a className="header"><a href={album.url}>{album.name} </a></a>
                    <div className="description"><strong>Playcount:</strong> {album.playcount}</div>
                  </div>
                </div>
              </div>

              // <li key={album.mbid}>
              //   <img src={album.image[0]['#text']} alt="album cover" />
              //   <a href={album.url}>{album.name} </a>
              // </li>
            ))}

          </ul>

          <p><small><strong>ID:</strong>{this.props.match.params.id}</small></p>
        </div>
      );
    }
  }
}

export default GuitaristDetail