import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Guitarist extends Component {
  state = {
    showGuitaristInfo: true
  };

  onShowClick = e => {
    // Toggle state between true and false
    this.setState({ showGuitaristInfo: !this.state.showGuitaristInfo });
    console.log('State updated');
  };

  onDeleteClick = () => {
    this.props.deleteClickHandler();
    console.log('Delete clicked');
  }



  render() {
    const { description, id, name } = this.props.guitarist;
    // const { showGuitaristInfo } = this.state;

    return (
      <div className="ui relaxed list">
        <div className="item" key={id}>
          <img className="ui avatar image" src="./images/daniel.jpg" alt={name} />
          <div className="content">

            <h2 className="header">{name} | <Link style={{ color: 'orange' }} to={`/guitarists/${id}`}>Details</Link> | <Link to={`/edit/${id}`}>Edit</Link> | <a onClick={this.onDeleteClick} style={{ cursor: 'pointer', color: 'red' }}>Delete</a></h2>

            <div className="description" style={{
              fontSize: '80%',
              width: '450px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>{description}

            </div>
          </div>
        </div>
        {/* <h4>{firstName} {lastName}
          <i
            onClick={this.onShowClick}
            className="fas fa-sort-down"
            style={{ cursor: 'pointer', marginLeft: 20 }}
          />
          <i
            onClick={this.onDeleteClick}
            className="fas fa-times"
            style={{ cursor: 'pointer', marginLeft: 20, color: 'red' }}
          />
        </h4> */}

      </div>
    )
  }
}

export default Guitarist