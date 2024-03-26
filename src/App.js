import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsC from './Components/NewsC';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <NewsC/>
      </div>
    )
  }
}



