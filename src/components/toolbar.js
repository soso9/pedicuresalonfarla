import React from 'react';
import Link from 'gatsby-link';
import {MDCToolbarFoundation} from '@material/toolbar/dist/mdc.toolbar';
import hero from '../hero.jpg';

class Toolbar extends React.Component {
  constructor() {
    super();
    this.foundation = new MDCToolbarFoundation({});
    this.wrapperRef = null;
    this.state = {isMenuOpen: false};
  }

  render() {
    return (
      <header className="mdc-toolbar mdc-toolbar--fixed">
        <div className="mdc-toolbar__row">
        <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
          <button className="material-icons mdc-toolbar__icon--menu" onClick={this.toggleMenu.bind(this)}>menu</button>
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

        <div className={this.getMenuClass()} tabIndex="-1" ref={node => {
          this.wrapperRef = node;
        }}>
          <ul className="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
            <li className="mdc-list-item" role="menuitem" tabIndex="0">
              <Link to="page2" className="mdc-list-item-link">Afspraak maken</Link>
            </li>
            <li className="mdc-list-item" role="menuitem" tabIndex="0">
              <Link to="#" className="mdc-list-item-link">Behandelingen</Link>
            </li>
            <li className="mdc-list-item" role="menuitem" tabIndex="0">
              <Link to="#" className="mdc-list-item-link">Prijzen</Link>
            </li>
            <li className="mdc-list-item" role="menuitem" tabIndex="0">
              <Link to="#" className="mdc-list-item-link">Producten</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }

  getMenuClass() {
    return `mdc-simple-menu ${this.state.isMenuOpen ? "mdc-simple-menu--open": ""}`;
  }

  toggleMenu() {
    const state = {...this.state, isMenuOpen: !this.state.isMenuOpen};
    this.setState(state);
  }

  componentDidMount() {
    document.addEventListener('touchend', (e) => {
      e.stopPropagation();
      e.preventDefault();
      this.handleClickOutsideMenu(e);
    })
    document.addEventListener('mousedown', this.handleClickOutsideMenu.bind(this));
  }

  handleClickOutsideMenu(e) {
    alert('click');
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      e.stopPropagation();
      e.preventDefault();
      const state = {...this.state, isMenuOpen: false}
      this.setState(state);
    }
  }
}

export default Toolbar;
