import React, { Component } from 'react'

class Lesson extends Component {
  state = {
    showLessonInfo: true
  };

  onShowClick = e => {
    // Toggle state between true and false
    this.setState({ showCLessonInfo: !this.state.showLessonInfo });
    console.log('State updated');
  };

  onDeleteClick = () => {
    this.props.deleteClickHandler();
    console.log('Delete clicked');
  }

  render() {
    const { title, url, description, id } = this.props.lesson;
    const { showLessonInfo } = this.state;

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


        {showLessonInfo ? (
          <p>
            {url}<br />
            {description}
          </p>
        ) : null}

      </div>
    )
  }
}

export default Lesson