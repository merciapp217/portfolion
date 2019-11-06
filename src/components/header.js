import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const activeLinkStyle = {
  color: '#d2b356',
}

const Header = ({ siteTitle }) => (
  <header>
    <h1><Link to="/">{siteTitle}</Link></h1>
    <nav>
      <ul>
        <li><Link to="/profile/" activeStyle={activeLinkStyle}>Profile</Link></li>
        <li><Link to="/skils/" activeStyle={activeLinkStyle}>Skils</Link></li>
        <li><Link to="/contact/" activeStyle={activeLinkStyle}>Contact</Link></li>
        <li><Link to="/">Blog</Link></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
