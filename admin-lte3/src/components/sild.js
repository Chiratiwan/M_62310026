import React from "react";

export default function () {
  return (
    <div>
      <div>
        <title>W3.CSS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <style
          dangerouslySetInnerHTML={{ __html: "\n.mySlides {display:none;}\n" }}
        />
        <h2 className="w3-center">Manual Slideshow</h2>
        <div className="w3-content w3-display-container">
          <img
            className="mySlides"
            src="img_snowtops.jpg"
            style={{ width: "100%" }}
          />
          <img
            className="mySlides"
            src="img_lights.jpg"
            style={{ width: "100%" }}
          />
          <img
            className="mySlides"
            src="img_mountains.jpg"
            style={{ width: "100%" }}
          />
          <img
            className="mySlides"
            src="img_forest.jpg"
            style={{ width: "100%" }}
          />
          <button
            className="w3-button w3-black w3-display-left"
            onclick="plusDivs(-1)"
          >
            ❮
          </button>
          <button
            className="w3-button w3-black w3-display-right"
            onclick="plusDivs(1)"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
