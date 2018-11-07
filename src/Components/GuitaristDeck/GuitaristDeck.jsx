import React, { Component } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import FontAwesome from "react-fontawesome";

class GuitaristDeck extends Component {
  state = {
    allGuitarists: [],
    allArtists: "",
    search: "",
    name: "",
    summary: "",
    photo: "",
    isLoaded: false
  };

  // Get a snapshot of the collection 'guitarists' from Firestore and set state
  componentDidMount() {
    db.onceGetUsers().onSnapshot(collection => {
      const allGuitarists = collection.docs.map(doc => doc.data());
      this.setState({ allGuitarists });
      console.log(allGuitarists);
    });
  }

  // Search form changes search state on changes to input field
  onChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    // Destructure state
    const { allGuitarists, search } = this.state;

    // Filter search query
    const filteredGuitarists = allGuitarists.filter(guitarist => {
      return guitarist.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

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

        <div className="padded container segment">
          <h3>Deck View</h3>

          <div className="ui raised four stackable cards">
            {filteredGuitarists.map(guitarist => (
              <div className="card" key={guitarist.id}>
                <div className="image">
                  <img src={guitarist.image} alt={guitarist.name} />
                </div>
                <div className="content">
                  <a className="header">
                    <Link
                      style={{ color: "orange" }}
                      to={`/guitarists/${guitarist.id}`}
                    >
                      {guitarist.name}
                    </Link>
                  </a>
                  <div className="meta">
                    <span className="date">Created in Sep 2014</span>
                  </div>
                </div>
                <div className="extra content">
                  <span className="left floated like">
                    <i className="like icon" />
                    Like
                  </span>
                  <span className="right floated star">
                    <i className="star icon" />
                    Favorite
                  </span>
                </div>
              </div>
            ))

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
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GuitaristDeck;
