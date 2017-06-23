import React from 'react'
import { PropTypes } from 'prop-types'
import { getFormattedDate } from '../../../util/dateHelper'
import { convertBitcoinToDollars, displayCurrency } from '../../../util/currencyConverter'

export class TransactionRow extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {}
  }

  render () {
    const {
      currentBitcoinPrice,
      transaction
    } = this.props

    return (
      <tr>
        <td className="table__td">{displayCurrency(convertBitcoinToDollars(transaction.value, currentBitcoinPrice.ask))}</td>
        <td className="table__td">{transaction.confirmations}</td>
        <td className="table__td">{getFormattedDate(transaction.confirmed)}</td>
      </tr>
    )
  }
}

TransactionRow.propTypes = {
  currentBitcoinPrice: PropTypes.object.isRequired,
  transaction: PropTypes.object.isRequired
}

export default TransactionRow
