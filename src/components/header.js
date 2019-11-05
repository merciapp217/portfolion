import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
      <h1 className="sp-none"><Link to="/">{siteTitle}</Link></h1>
      <nav>
        <ul>
        <li><Link to="/"><FontAwesomeIcon icon={faHome} /></Link></li>
          <li><Link to="/profile/" activeClassName="active">Profile</Link></li>
          <li><Link to="/skils/" activeClassName="active">Skils</Link></li>
          <li><Link to="/contact/" activeClassName="active">Contact</Link></li>
          <li><a href="#" target="_blank">Blog</a></li>
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
