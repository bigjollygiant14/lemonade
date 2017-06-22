import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as txHistoryActions from '../../../actions/TxHistoryActions'
import TransactionTable from './TransactionTable'

export class MyTransactionsPage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      txHistory: Object.assign({
        txrefs: []
      }, props.txHistory)
    }
  }

  componentWillMount () {
    this.props.actions.getTransactionHistory()
  }

  componentWillReceiveProps (newProps) {
    if (newProps.txHistory !== this.props.txHistory) {
      console.log('newProps', newProps)
      this.setState({
        txHistory: newProps.txHistory
      })
    }
  }

  render () {
    return (
      <div className="MyTransactionsPage">
        <h1>My Transactions</h1>

        <TransactionTable txHistory={this.state.txHistory} />
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
