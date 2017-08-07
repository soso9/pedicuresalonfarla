import React from 'react';
import Link from 'gatsby-link'
import hero from '../hero.jpg';
import {services, Service, ServiceGrid} from '../components/service';
import "./index.css";


const IndexPage = () =>
  <div>
    <div className="hero" style={ {background:`url("${hero}") no-repeat center center`} }>
      <div className="hero--inner">
        <h1>Uw voeten in de beste handen</h1>
        <Link to="afspraak-maken" className="mdc-button mdc-button--raised mdc-button--primary hero--inner--cta">
           Afspraak maken
          </Link>
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

        <div className="header--text">
          <h2>Werkwijzen</h2>
        </div>

        <div className="breakup">
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">

        <div className="mdc-layout-grid__cell  mdc-layout-grid__cell--span-6">
          <p>
            In de salon wordt er gewerkt met een pedicuremotor op basis van spraytechniek. U ondergaat hierdoor een pijnloze en ook hygiënische behandeling. De beroepscode van de voetverzorging wordt strikt gevolgd. Hygiëne, veiligheid en milieubewust werken heeft de hoogste prioriteit.
          </p>
        </div>
        <div className="mdc-layout-grid__cell  mdc-layout-grid__cell--span-6">
          <img className="mdc-elevation--z6 work--image" src="http://pedicuresalonfarla.nl/wp-content/uploads/2015/09/IMG_0063a.jpg?5be512" />
        </div>
      </div>
    </div>
        </div>
        <div className="header--text">
        <h2>Behandelingen</h2>
        </div>

        <ServiceGrid services={services} />
    </main>
  </div>

export default IndexPage
