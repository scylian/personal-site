import React from 'react'
import { Link } from 'gatsby'
import styles from './NavigationHeader.module.scss'

class NavigationHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getClass(currentLocation) {

    let className = styles.listItem;

    if (this.props.location) {
      let location = this.props.location.pathname
      location = location.substring(0, location.length-1)

      if (location === currentLocation) {
        className += ' ' + styles.active;
      }
    }

    return className
  }

  render() {
    return (
      <nav className={styles.navBar} style={{ display: 'flex', flex: 1 }}>
        {
          this.props.menuLinks.map(link =>
            <li className={this.getClass(link.link)} key={link.name} style={{ 'listStyleType': 'none' }}>
              <Link to={link.link}>{link.name}</Link>
            </li>)
        }
      </nav>
    )
  }
}

export default NavigationHeader