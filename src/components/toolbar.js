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
          <span className="mdc-toolbar__title">Pedicuresalon Farla</span>
        </section>
        </div>
      </header>
    );
  }
}

export default Toolbar;
