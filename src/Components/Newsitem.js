import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {

    let {title, description, imageurl, newsurl} = this.props;

    return (
      <div>

        <div className="card" style={{ width: "18rem", margin : "auto" }}>
          <img src={imageurl ? imageurl : "https://i.pinimg.com/736x/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <center><a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a></center>
          </div>
        </div>
        
      </div>
    );
  }
}
