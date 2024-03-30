import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class NewsC extends Component {
  constructor() {
    super();
    //console.log("i am the constructor");
    this.state = {
      articles: [],
      page: 1,
    };
  }

  async componentDidMount() {
    let api_url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b53455737613477ab1d298fdd24e05ba&page=1&pagesize=${this.props.pagesize}`;

    let data = await fetch(api_url);
    let parsed_data = await data.json();
    this.setState({
      articles: parsed_data.articles,
      totalResults: parsed_data.totalResults,
    });
  }

  previous_page = async () => {
    let api_url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=b53455737613477ab1d298fdd24e05ba&page=${
      this.state.page - 1
    }&pagesize=${this.props.pagesize}`;

    let data = await fetch(api_url);
    let parsed_data = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsed_data.articles,
    });
  };

  next_page = async () => {
    if (
      this.state.page + 1 <=
      Math.ceil(this.state.totalResults / this.props.pagesize)
    ) {
      let api_url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=b53455737613477ab1d298fdd24e05ba&page=${
        this.state.page + 1
      }&pagesize=${this.props.pagesize}`;

      let data = await fetch(api_url);
      let parsed_data = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsed_data.articles,
      });
    } else {
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 style={{ marginTop: "90px" }}>
          <center>{this.props.category} Headlines</center>
        </h1>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.previous_page}
          >
            Previous Page
          </button>
          <button
            disabled={
              this.state.page >=
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.next_page}
          >
            Next Page
          </button>
        </div>

        <div className="row my-4">
          {this.state.articles.map((element) => {
            return (
              <div className="col-lg-4 col-md-6 my-3" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  publish={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.previous_page}
          >
            Previous Page
          </button>
          <button
            disabled={
              this.state.page >= Math.ceil(this.state.totalResults / 10)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.next_page}
          >
            Next Page
          </button>
        </div>
      </div>
    );
  }
}
