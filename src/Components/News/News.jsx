import React, { Component } from 'react'
import { app } from '../../firebase'

class News extends Component {
  state = {
    news: [],
    isLoaded: true,
  }

  componentDidMount() {
    app.getNews()
  }


  // componentDidMount() {
  //   this.fetchNews()
  // }

  // fetchNews() {
  //   fetch('https://newsapi.org/v2/everything?q="jazz guitar"&from=2018-09-10&sortBy=publishedAt&language=en&apiKey=6d0556a9bc56423e8629c79e2a513120')
  //     .then(response => response.json())
  //     .then(data => this.setState({
  //       news: data.articles,
  //       isLoaded: true
  //     }))
  // }


  // newsItems() {
  //   return this.state.news.map(article => (
  //     <NewsArticle
  //       key={article.url}
  //       article={article}
  //     />
  //   ))
  // }



  render() {

    const { isLoaded } = this.state

    if (!isLoaded) {
      return <div className="ui container segment" style={{ marginTop: "30px" }}>
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    }

    else {

      return (
        <div>
          <h1>Welcome to the...</h1>
          <div className="title"><span style={{ color: 'orange' }}>Jazz</span> <span className="blue">Guitar</span> Cafe</div>
          <p>Here you will find a wealth of information on the great jazz guitar players of the past and present.</p>
          <h3>News (curated news will go here)</h3>
          <ul>
            <li>News Item 1</li>
            <li>News Item 2</li>
            <li>News Item 3</li>
            <li>News Item 4</li>
            <li>News Item 5</li>
          </ul>
        </div>
      )
    }
  }
}

export default News
