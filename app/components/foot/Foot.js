/* eslint-disable no-unused-vars */
import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
/* eslint-enable no-unused-vars */

export class Foot extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      links: [
        {
          title: 'About',
          link: '/about'
        }, {
          title: 'Contact Us',
          link: '/contact'
        }, {
          title: 'Terms of Service',
          link: '/tos'
        }, {
          title: 'Legal',
          link: '/legal'
        }
      ]
    }
  }

  render () {
    return (
      <div className="foot">
        <div className="foot__container">
          <div className="foot__div">
            {this.state.links.map(function (l, i) {
              return (
                <Link to={l.link} key={i} className="foot__a">{l.title}</Link>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

Foot.contextTypes = {
  router: PropTypes.object
}

export default Foot
