import React from "react";
import { Link } from "react-router-dom";

export default function Aboutme() {
  return (
    <div className="content-wrapper">
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{__html: "\n  body {\n    font: 15px Montserrat, sans-serif;\n    line-height: 1.8;\n    color: #171312 ;\n  }\n  p {font-size: 16px;}\n  .margin {margin-bottom: 20px;}\n  .bg-1 { \n     /* Green */\n    color: #171312 ;\n  }\n  .bg-2 { \n   /* Dark Blue */\n    color: #ffffff;\n  }\n  .bg-3 { \n    background-color: #ffffff; /* White */\n    color: #555555;\n  }\n  .bg-4 { \n    background-color: #2f2f2f; /* Black Gray */\n    color: #fff;\n  }\n  .container-fluid {\n    padding-top: 80px;\n    padding-bottom: 70px;\n  }\n  .navbar {\n    padding-top: 5px;\n    padding-bottom: 5px;\n    border: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    font-size: 19px;\n    letter-spacing: 5px;\n  }\n  .navbar-nav  li a:hover {\n    color: #1abc9c !important;\n  }\n  " }} />
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n.logo {\n  font-size: 200px;\n}\n@media screen and (max-width: 768px) {\n  .col-sm-4 {\n    text-align: center;\n    margin: 25px 0;\n  }\n}\n",
          }}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <h2>About Me....</h2>
              <h4>CHIRATIWAN YODKORNBURI</h4>
              <p>FB : Jira Tiwan</p>
              <p>IG : Mimijibiko</p>
              <p>Line : chiratiwan</p>
              <p>Birth : 10 Sep 2001</p>
              <button className="btn btn-default btn-lg">Get in Touch</button>
            </div>
            <div className="col-sm-1">
              <img src="https://scontent.fbkk2-4.fna.fbcdn.net/v/t39.30808-6/241196523_992374844675748_1698752474323335127_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGBgl-4LZtKDySiRl3Q0IlWivlsL21t8yGK-WwvbW3zIcB2GsC974nJFR-JgDvTb1jShiuVs3YPjtemtJ9fnVfO&_nc_ohc=gjywlvF9EwoAX8OKjt0&_nc_zt=23&_nc_ht=scontent.fbkk2-4.fna&oh=00_AT-jTWsGLm0t_dxTmGfx1R6DgyWgY10FpSnE5x4XHvyL4A&oe=6324A121" height={350}></img>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-grey">
          <div className="row">
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-globe logo" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
