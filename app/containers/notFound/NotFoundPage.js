import React from 'react'

export class NotFoundPage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {}
  }

  render () {
    /* const {
      accountData
    } = this.props */

    return (
      <div>
        <h1>You Have Reached The Lost Pages</h1>
      </div>
    )
  }
}

export default NotFoundPage
