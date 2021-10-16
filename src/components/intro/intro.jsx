import React from 'react'
import './intro.css'
import Me from '../../img/Me.png';
export default function intro() {
    return (
        <div className="i">
           <div className="i-left">
               <div className="i-left-wrapper">
                   <h2 className="i-intro">Hello, My name is</h2>
                   <h1 className="i-name">Adam Ben-Bourhim</h1>
                   <div className="i-title">
                       <div className="i-title-wrapper">
                           <div className="i-title-item">Web Developer</div>
                           <div className="i-title-item">UI/UX Designer</div>
                           <div className="i-title-item">Photographer</div>
                           <div className="i-title-item">Writer</div>
                           <div className="i-title-item">Content Creator</div>
                       </div>
                   </div>
                   <div className="i-desc">
                   I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️

I am fluent in classics like JAVA. 

My field of Interest's are building new  Web Technologies and Products and also in areas related to Deep Learning and Natural Language Processing.

Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js
                   </div>
               </div>
           </div>
           <div className="i-right">
<div className="i-bg"></div>
           </div>
        </div>
    )
}
