import React from 'react'
import { PropTypes } from 'prop-types'
import TransactionRow from './TransactionRow'

export class MyTransactionsPage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.emptyRow = this.emptyRow.bind(this)
  }

  emptyRow () {
    return (
      <tr>
        <td>No Transactions Found</td>
      </tr>
    )
  }

  render () {
    const {
      currentBitcoinPrice,
      txHistory
    } = this.props

    return (
      <div className="table__container">
        <table className="table">
          <thead>
            <tr>
              <th className="table__head__th">Transaction Amount</th>
              <th className="table__head__th">Confirmed</th>
              <th className="table__head__th">On Date</th>
            </tr>
          </thead>
          <tbody>
            {txHistory.txrefs.length > 0 ? (
              txHistory.txrefs.map((transaction, i) => {
                return (
                  <TransactionRow transaction={transaction} currentBitcoinPrice={currentBitcoinPrice} key={i}/>
                )
              })
            ) : (
              this.emptyRow()
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

MyTransactionsPage.propTypes = {
  currentBitcoinPrice: PropTypes.object.isRequired,
  txHistory: PropTypes.object.isRequired
}

export default MyTransactionsPage
