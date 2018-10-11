import React from 'react'

const NewsArticle = ({ article }) => {
  return (
    <React.Fragment>
      <div className="ui very relaxed list">
        <div className="item">
          {article.urlToImage ?
            <img className="ui avatar image" src={article.urlToImage} alt="article thumbnail" />
            : <img className="ui avatar image" src="./images/no-album-thumbnail.png" alt="article thumbnail" />
          }
          <div className="content">
            <div className="header"><a href={article.url}>{article.title}</a></div>

          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default NewsArticle
