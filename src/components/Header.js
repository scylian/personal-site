import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import pfp from '../images/pfp.jpg'

const Header = (props) => (
	<header id="header" style={props.timeout ? {display: 'none'} : {}}>
		<div className="logo">
			{/* <span className="icon fa-diamond"></span> */}
			<img src={pfp} alt="Profile Picture" className="pfp" />
		</div>
		<div className="content">
			<div className="inner">
				<h1>Bien Nguyen</h1>
				<p>Software Engineer | Front-end Developer | Photographer | Community Manager | Gamer</p>
			</div>
		</div>
		<nav>
			<ul>
				<li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
				<li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
				<li><Link to="/gallery/">Gallery</Link></li>
				{/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li> */}
				<li><a href="javascript:;" onClick={() => {props.onOpenArticle('blog')}}>Blog</a></li>
			</ul>
		</nav>
	</header>
)

Header.propTypes = {
	onOpenArticle: PropTypes.func,
	timeout: PropTypes.bool
}

export default Header
