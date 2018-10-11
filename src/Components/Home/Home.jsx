import React from 'react'
import News from '../News/News'

const Home = () => (
  <div className="ui raised very padded container segment" style={{ marginTop: "30px" }}>
    <h1>Welcome to the Jazz Guitar Cafe</h1>
    <p>Here you will find a wealth of information on the great jazz guitar players of the past and present.</p>
    <News />
  </div>
)


export default Home