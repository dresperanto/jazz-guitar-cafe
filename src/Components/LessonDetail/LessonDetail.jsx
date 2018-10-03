import React, { Component } from 'react'
import { db } from '../../firebase'
import { Link } from 'react-router-dom'

class LessonDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: ''
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    db.collection("lessons").doc(id)
      .get()
      .then(doc => this.setState({ profile: doc.data() }))
  }

  render() {

    const { title, url, description } = this.state.profile

    return (
      <div className="ui raised very padded text container segment" style={{ marginTop: "30px" }}>
        <h1>Details</h1>
        <h2>{title}</h2>
        <p>{description} | <a href={url}>{url}</a></p>
        <small>{this.props.match.params.id}</small>
        <Link to="/lessons">Lessons</Link>

      </div>
    );
  }
}

export default LessonDetail