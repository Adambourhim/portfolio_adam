import React from 'react'
import './about.css'
import Picture from '../../img/Picture.jpeg'
export default function about() {
    return (
        <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Picture}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        
        <p className="a-desc">
        I am front-end developer building websites and web applications. I specialize in javaScript .I also have a good experience with React.
        </p>
        
      </div>
    </div>
    )
}
