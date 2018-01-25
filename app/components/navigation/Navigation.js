import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

// export class NavigationPage extends React.Component {
//   constructor (props, context) {
//     super(props, context)

//     this.state = {}
// }
const links = [
  {
    to: '/',
    title: 'Current Price'
  }, {
    to: '/history',
    title: 'Price History'
  }
]

const NavigationComponent = () => {
  return (
    <div className="navigation-component container-fluid">
      <div className="row">
        <div className="navigation-component__div--header container">
          <h1>Granny's Gold</h1>
        </div>

        <div className="navigation-component__div--link-container container">
          {links.map((link, index) => {
            return (
              <Link key={index} to={link.to}>{link.title}</Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

NavigationComponent.contextTypes = {
  router: PropTypes.object
}

export default NavigationComponent
