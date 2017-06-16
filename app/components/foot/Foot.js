import React from 'react'

export class Foot extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {}
  }

  render () {
    /* const {
      accountData
    } = this.props */

    return (
      <div className="foot">
        <div className="foot__container">
          <h1>Footer</h1>
        </div>
      </div>
    )
  }
}

export default Foot
