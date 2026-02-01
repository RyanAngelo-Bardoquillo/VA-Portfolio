import React from 'react'

import profileImage from '../assets/images/474473831_1338322083834772_652215126787368541_n.jpg'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image-wrap">
          <img
            src={profileImage}
            alt="Ryan"
            className="hero-image"
          />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">Hi! I'm Ryan</h1>
          <p className="hero-subheading">Virtual Assistant</p>
          <p className="hero-tagline">Streamlining your workflow so you can focus on what matters.</p>
          <a href="#contact" className="hero-cta">Get in touch</a>
        </div>
      </div>
    </section>
  )
}
