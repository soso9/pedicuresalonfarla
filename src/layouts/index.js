import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Toolbar from '../components/toolbar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.scss'

injectTapEventPlugin();

const Header = () => <Toolbar />

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
