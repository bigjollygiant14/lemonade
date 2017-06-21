import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as addressActions from '../../../actions/AddressActions'

export class NewTransactionPage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      customerAddress: Object.assign({}, props.customerAddress),
      amount: 20
    }

    this.generateAddress = this.generateAddress.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
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
    this.props.actions.createCustomerAddress()
  }

  handleInputChange (event) {
    let target = event.target
    let newTx = Object.assign({}, this.state.tx)

    switch (target.type) {
      case 'number':
        newTx[target.name] = Number(target.value)
        break
      default:
        newTx[target.name] = target.value
        break
    }

    this.setState({
      tx: newTx
    })
  }

  submitPayment (event) {
    event.preventDefault()

    // action to send payload
  }

  render () {
    console.log('render', this.state)
    console.log('render', this.props)
    return (
      <div className="newTransactionPage">
        <h1>New Transaction</h1>

        <form className="form">
          <div className="form__form-group form__form-group--first">
            <input className="form__input" type="text" name="customerAddress" value={this.state.customerAddress.address || ''} onChange={this.handleInputChange}/>
            <label className="form__label">Customer Address</label>
            <button className="button button--fixed-width" onClick={this.generateAddress}>Generate New Address</button>
          </div>

          <div className="form__form-group">
            <input className="form__input" type="number" name="amount" value={this.state.amount || 0} onChange={this.handleInputChange}/>
            <label className="form__label">Amount</label>
          </div>

          <div className="form__form-group">
            <button className="button button--fixed-width">Send Payment</button>
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
    actions: bindActionCreators(addressActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTransactionPage)

// export default NewTransactionPage
