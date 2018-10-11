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
      return <div className="ui raised very padded text container segment" style={{ marginTop: "30px" }}>
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    }

    else {

      return (
        <div className="ui raised very padded text container segment animated fadeIn" style={{ marginTop: "30px" }}>
          <h1>Details | <Link to="/guitarists">All Guitarists</Link></h1>
          <h3>{name}</h3>

          <img className="ui small rounded left floated image" src={photo} alt={name} />
          <p>{summary}</p>

          <p><a href={profile.website}>Website</a></p>

          <h4 className="ui horizontal divider header">
            <i className="music icon"></i>
            Recordings
          </h4>

          <div className="ui list">
            {topAlbums.map(album => (
              <div key={album.mbid} className="item" style={{ marginBottom: '1.6em', borderBottom: '1px, solid, #f5f5f5' }}>
                {album.image[0]['#text'] ?
                  <img className="ui rounded image" src={album.image[0]['#text']} alt="album cover" />
                  : <img className="ui rounded image" src={photo} alt="default" style={{ height: '34px', width: '34px' }} />
                }
                <div className="content">
                  <span className="header"><a href={album.url}>{album.name}</a></span>
                  <div className="description">
                    <strong>Playcount:</strong> {album.playcount}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p><small><strong>ID:</strong>{this.props.match.params.id}</small></p>
        </div>
      );
    }
  }
}

export default GuitaristDetail