import React, { Component } from 'react'

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
    const { title, url, description, id } = this.props.guitarist;
    const { showGuitaristInfo } = this.state;

    return (
      <div>
        <h4>{title} | {id}
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
        </h4>


        {showGuitaristInfo ? (
          <p>
            {url}<br />
            {description}
          </p>
        ) : null}

      </div>
    )
  }
}

export default Guitarist