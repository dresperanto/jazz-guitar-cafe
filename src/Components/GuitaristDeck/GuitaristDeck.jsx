import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';

class GuitaristDeck extends Component {
  state = {
    allGuitarists: [],
    allArtists: '',
    search: '',
    name: '',
    summary: '',
    photo: '',
    isLoaded: false
  }

  // Get a snapshot of the collection 'guitarists' from Firestore and set state
  componentDidMount() {
    db.onceGetUsers()
      .onSnapshot(collection => {
        const allGuitarists = collection.docs.map(doc => doc.data())
        this.setState({ allGuitarists })
        console.log(allGuitarists)
      });
  }



  render() {
    const { allGuitarists } = this.state;

    return (
      <div className="ui raised very padded container segment" style={{ marginTop: "30px" }}>
        <h1>Guitarist Deck</h1>

        <div className="ui raised four stackable cards">

          {allGuitarists.map(guitarist =>


            <div className="card" key={guitarist.id}>
              <div className="image">
                <img src={guitarist.image} alt={guitarist.name} />
              </div>
              <div className="content">
                <a className="header"><Link style={{ color: 'orange' }} to={`/guitarists/${guitarist.id}`}>{guitarist.name}</Link></a>
                <div className="meta">
                  <span className="date">Created in Sep 2014</span>
                </div>
              </div>
              <div className="extra content">
                <span className="left floated like">
                  <i className="like icon"></i>
                  Like
                </span>
                <span className="right floated star">
                  <i className="star icon"></i>
                  Favorite
                </span>
              </div>
            </div>



            // <div className="ui four stackable cards" key={guitarist.id}>
            //   <div className="ui card slide masked reveal image">
            //     <img src="/images/avatar/large/jenny.jpg" className="visible content" alt={guitarist.name} />
            //     <img src="/images/avatar/large/elliot.jpg" className="hidden content" alt={guitarist.name} />
            //   </div>
            //   <div className="content">
            //     <a className="header">{guitarist.name}</a>
            //     <div className="meta">
            //       <span className="date">Created in Sep 2014</span>
            //     </div>
            //   </div>
            //   <div className="extra content">
            //     <a>
            //       <i className="users icon"></i>
            //       2 Members
            //       </a>
            //   </div>
            // </div>

          )}
        </div>
      </div>
    )
  }
}

export default GuitaristDeck
