import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as addressActions from '../../../actions/AddressActions'
import * as transactionActions from '../../../actions/TransactionActions'

export class NewTransactionPage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      customerAddress: Object.assign({}, props.customerAddress),
      value: 40000
    }

    this.generateAddress = this.generateAddress.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.submitPayment = this.submitPayment.bind(this)
  }

  componentWillReceiveProps (newProps) {
    if (newProps.customerAddress !== this.props.customerAddress) {
      this.setState({
        customerAddress: newProps.customerAddress
      })
    }
  }

  generateAddress (event) {
    event.preventDefault()
    this.props.actions.addressActions.createCustomerAddress()
  }

  handleInputChange (event) {
    let target = event.target
    let customerAddress = Object.assign({}, this.state.customerAddress)

    switch (target.type) {
      case 'number':
        this.setState({
          value: Number(target.value)
        })
        break
      default:
        customerAddress[target.name] = target.value
        this.setState({
          customerAddress: customerAddress
        })
        break
    }
  }

  submitPayment (event) {
    event.preventDefault()

    let payload = {
      customerAddress: this.state.customerAddress.address,
      value: this.state.value
    }

    console.log('Creating TX with payload from UI', payload)

    // action to send payload
    this.props.actions.transactionActions.createTransaction(payload)
  }

  render () {
    return (
      <div className="newTransactionPage">
        <h1>New Transaction</h1>

        <form className="form">
          <div className="form__form-group form__form-group--first">
            <input className="form__input" type="text" name="address" value={this.state.customerAddress.address || ''} onChange={this.handleInputChange}/>
            <label className="form__label">Customer Address</label>
            <button className="button button--fixed-width" onClick={this.generateAddress}>Generate New Address</button>
          </div>

          <div className="form__form-group">
            <input className="form__input" type="number" name="value" value={this.state.value || 0} onChange={this.handleInputChange}/>
            <label className="form__label">Amount (in bitcoins)</label>
          </div>

          <div className="form__form-group">
            <button className="button button--fixed-width" onClick={this.submitPayment}>Send Payment</button>
            <label className="form__label">Send payment to Silly Sam</label>
          </div>
        </form>
      </div>
    )
  }
}

NewTransactionPage.propTypes = {
  actions: PropTypes.object.isRequired,
  customerAddress: PropTypes.object.isRequired
}

NewTransactionPage.contextTypes = {
  router: PropTypes.object
}

function mapStateToProps (state) {
  return {
    customerAddress: state.customerAddress
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: {
      addressActions: bindActionCreators(addressActions, dispatch),
      transactionActions: bindActionCreators(transactionActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTransactionPage)
