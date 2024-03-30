import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import NewsC from "./Components/NewsC";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {

  api_key = process.env.REACT_APP_NEWS_API

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <NewsC
                  api_key={this.api_key}
                  key="General"
                  pagesize="20"
                  country="in"
                  category="General"
                />
              }
            />
            <Route
              exact
              path="/Business"
              element={
                <NewsC
                api_key={this.api_key}
                  key="Business"
                  pagesize="20"
                  country="in"
                  category="Business"
                />
              }
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <NewsC
                api_key={this.api_key}
                  key="Entertainment"
                  pagesize="20"
                  country="in"
                  category="Entertainment"
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <NewsC
                api_key={this.api_key}
                  key="Health"
                  pagesize="20"
                  country="in"
                  category="Health"
                />
              }
            />
            <Route
              exact
              path="/Science"
              element={
                <NewsC
                api_key={this.api_key}
                  key="Science"
                  pagesize="20"
                  country="in"
                  category="Science"
                />
              }
            />
            <Route
              exact
              path="/Sports"
              element={
                <NewsC
                api_key={this.api_key}
                  key="Sports"
                  pagesize="20"
                  country="in"
                  category="Sports"
                />
              }
            />
            <Route
              exact
              path="/Technology"
              element={
                <NewsC
                api_key={this.api_key}
                  key="Technology"
                  pagesize="20"
                  country="in"
                  category="Technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
