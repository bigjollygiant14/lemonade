import React from 'react'
import { PropTypes } from 'prop-types'
import { getFormattedDate } from '../../../util/dateHelper'

export class TransactionRow extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {}
  }

  render () {
    const {
      transaction
    } = this.props

    return (
      <tr>
        <td className="table__td">{transaction.value}</td>
        <td className="table__td">{transaction.confirmations}</td>
        <td className="table__td">{getFormattedDate(transaction.confirmed)}</td>
      </tr>
    )
  }
}

TransactionRow.propTypes = {
  transaction: PropTypes.object.isRequired
}

export default TransactionRow
