import React from 'react'
import Link from 'gatsby-link'
import hero from '../hero.jpg';
import "./index.css";

const IndexPage = () =>
  <div>
    <div className="hero" style={ {background:`url("${hero}") no-repeat center center`} }>
      <div className="hero--inner">
        <h1>Uw voeten in de beste handen</h1>
        <a className="mdc-button mdc-button--raised mdc-button--primary hero--inner--cta">
           Afspraak maken
          </a>
      </div>
    </div>
    <main>
    <div className="mdc-layout-grid">
      <div className="mdc-layout-grid__inner">
        <div className="mdc-layout-grid__cell feature--box">
          <div className="featured--icon">
            <i className="material-icons mdc-theme--text-primary-on-primary mdc-ripple-upgraded mdc-ripple-upgraded--unbounded mdc-ripple-upgraded--background-active-fill">favorite</i>
          </div>
          <h2>Aandacht</h2>
          <p>U staat centraal tijdens de behandeling</p>
        </div>
        <div className="mdc-layout-grid__cell feature--box">
        <div className="featured--icon">
          <i className="material-icons mdc-theme--text-primary-on-primary mdc-ripple-upgraded mdc-ripple-upgraded--unbounded mdc-ripple-upgraded--background-active-fill">school</i>
        </div>
          <h2>Vakmanschap</h2>
          <p>Aangesloten bij ProVoet en meer dan 10 jaar praktiserend pedicure</p>
        </div>
        <div className="mdc-layout-grid__cell feature--box">
        <div className="featured--icon">
          <i className="material-icons mdc-theme--text-primary-on-primary mdc-ripple-upgraded mdc-ripple-upgraded--unbounded mdc-ripple-upgraded--background-active-fill">comment</i>
        </div>
          <h2>Gezellig</h2>
          <p>Heerlijk genieten van een babbel tijdens een wel verdiende behandeling</p>
        </div>
      </div>
    </div>
    </main>
  </div>

export default IndexPage
