import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
	<footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
		<ul className="icons">
			<li><a href="https://twitter.com/mynameisbien" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
			<li><a href="https://instagram.com/mynameisgood" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
			<li><a href="https://linkedin.com/in/biengnguyen" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
			<li><a href="https://github.com/scylian" className="icon fa-github"><span className="label">GitHub</span></a></li>
			<li><a href="https://twitch.tv/xiily" className="icon fa-twitch"><span className="label">Twitch</span></a></li>
			<li><a href="mailto:bien.g.nguyen@gmail.com" className="icon fa-envelope"><span className="label">Email</span></a></li>
		</ul>
	</footer>
)

Footer.propTypes = {
	timeout: PropTypes.bool
}

export default Footer
