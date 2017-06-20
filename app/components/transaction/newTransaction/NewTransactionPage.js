import React from 'react'

export class NewTransactionPage extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      tx: {
        myAddress: '12',
        customerAddress: '44',
        amount: 20
      }
    }

    this.generateAddress = this.generateAddress.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  generateAddress () {
    console.log('generating!')
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
    return (
      <div className="newTransactionPage">
        <h1>New Transaction</h1>

        <form className="form">
          <div className="form__form-group form__form-group--first">
            <input className="form__input" type="text" name="customerAddress" value={this.state.tx.customerAddress || ''} onChange={this.handleInputChange}/>
            <label className="form__label">Customer Address</label>
            <button className="button button--fixed-width" onClick={this.generateAddress}>Generate New Address</button>
          </div>

          <div className="form__form-group">
            <input className="form__input" type="number" name="amount" value={this.state.tx.amount || 0} onChange={this.handleInputChange}/>
            <label className="form__label">Amount</label>
          </div>

          <div className="form__form-group">
            <button className="button button--fixed-width">Send Payment</button>
            <label className="form__label">Send payment to {this.state.tx.myAddress}</label>
          </div>
        </form>
      </div>
    )
  }
}

export default NewTransactionPage
