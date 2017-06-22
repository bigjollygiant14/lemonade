import React from 'react'

export class NotFoundPage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {}
  }

  render () {
    return (
      <div>
        <h1>You Have Reached The Lost Pages</h1>
        <p>Only Indy can save you now!</p>
      </div>
    )
  }
}

export default NotFoundPage
