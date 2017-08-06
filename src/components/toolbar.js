import React from 'react';
import Link from 'gatsby-link';
import {MDCToolbarFoundation} from '@material/toolbar/dist/mdc.toolbar';
import hero from '../hero.jpg';

class Toolbar extends React.Component {
  constructor() {
    super();
    this.foundation = new MDCToolbarFoundation({});
  }

  render() {
    return (
      <header className="mdc-toolbar">
        <div className="mdc-toolbar__row">
        <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
          <a href="#" className="material-icons mdc-toolbar__icon--menu">menu</a>
          <span className="mdc-toolbar__title">Pedicuresalon Farla</span>
        </section>
        <section className="mdc-toolbar__section mdc-toolbar__section__navigation">
          <div className="mdc-toolbar__navigation">
          <Link className="mdc-toolbar__navigation__item" to="#">Afspraak maken</Link>
          <Link className="mdc-toolbar__navigation__item" to="#">Behandelingen</Link>
          <Link className="mdc-toolbar__navigation__item" to="#">Prijzen</Link>
          <Link className="mdc-toolbar__navigation__item" to="#">Producten</Link>
          </div>
        </section>
        </div>
      </header>
    );
  }
}

export default Toolbar;
