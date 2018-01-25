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
      <div className="not-found-page container">
        <div className="row">
          <div className="col-xs-6 col-xs-offset-3">
            <h1>"Sandpeople always ride single file to hide their numbers."</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFoundPage
