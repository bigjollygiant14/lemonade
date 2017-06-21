import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as txHistoryActions from '../../../actions/TxHistoryActions'

export class MyTransactionsPage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      txHistory: Object.assign({}, props.txHistory)
    }
  }

  componentWillMount () {
    this.props.actions.getTransactionHistory()
  }

  componentWillReceiveProps (newProps) {
    if (newProps.txHistory !== this.props.txHistory) {
      this.setState({
        txHistory: newProps.txHistory
      })
    }
  }

  render () {
    return (
      <div className="MyTransactionsPage">
        <h1>My Transactions</h1>

        <div className="table__container">
          <table className="table">
            <thead>
              <tr>
                <th className="table__head__th">Transaction Amount</th>
                <th className="table__head__th">From Account</th>
                <th className="table__head__th">On Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table__td">$20.00</td>
                <td className="table__td">1231441413</td>
                <td className="table__td">June 18, 2017</td>
              </tr>
              <tr>
                <td className="table__td">$15.00</td>
                <td className="table__td">1231239875</td>
                <td className="table__td">June 19, 2017</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    )
  }
}

MyTransactionsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  txHistory: PropTypes.object.isRequired
}

MyTransactionsPage.contextTypes = {
  router: PropTypes.object
}

function mapStateToProps (state) {
  return {
    txHistory: state.txHistory
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(txHistoryActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTransactionsPage)
