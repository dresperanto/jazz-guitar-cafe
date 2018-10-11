import React, { Component } from 'react'
// import NewsArticle from '../NewsArticle/NewsArticle'

class News extends Component {
  state = {
    news: [],
    isLoaded: true,
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
          <h3>Jazz Guitar News</h3>
          <p>Curated items from Google alerts and select publications will appear here</p>
        </div>
      )
    }
  }
}

export default News
