import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import NewsC from './Components/NewsC';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<NewsC key="General" pagesize="10" country="in" category="General" />} />
            <Route exact path="/Business" element={<NewsC key="Business" pagesize="10" country="in" category="Business" />} />
            <Route exact path="/Entertainment" element={<NewsC key="Entertainment" pagesize="10" country="in" category="Entertainment" />} />
            <Route exact path="/Health" element={<NewsC key="Health" pagesize="10" country="in" category="Health" />} />
            <Route exact path="/Science" element={<NewsC key="Science" pagesize="10" country="in" category="Science" />} />
            <Route exact path="/Sports" element={<NewsC key="Sports" pagesize="10" country="in" category="Sports" />} />
            <Route exact path="/Technology" element={<NewsC key="Technology" pagesize="10" country="in" category="Technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
