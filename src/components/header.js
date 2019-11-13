import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
      <h1><Link to="/">{siteTitle}</Link></h1>
      <nav>
        <ul>
          <li><Link to="/profile/" activeClassName="active">Profile</Link></li>
          <li><Link to="/skils/" activeClassName="active">Skils</Link></li>
          <li><Link to="/contact/" activeClassName="active">Contact</Link></li>
          <li><Link to="/">Blog</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
