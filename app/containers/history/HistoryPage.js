import React from 'react'

export class HistoryPage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {}
  }

  componentWillMount () {
    /* List of Prices for last 30 minutes */
    // get historical data
  }

  render () {
    return (
      <div className="history-page">
        {/* Each coins high and low */}
        {/* Graph of histories */}
      </div>
    )
  }
}

export default HistoryPage
