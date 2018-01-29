import React from 'react'
import { PropTypes } from 'prop-types'
const litecoin = require('../../assets/litecoin.svg')
const dogecoin = require('../../assets/dogecoin.svg')
const monero = require('../../assets/monero.svg')

const CurrentPriceTable = () => {
  return (
    <div className="current-price-table row">
      <div className="current-price-table--table col-xs-12">
        <h2>Current Price</h2>
        <h6>Prices are per BTC</h6>

        <div className="col-xs-12 current-price-table--table__div">
          <img src={litecoin} alt="Litecoin Currency" />
          <h4>Litecoin</h4>
          <h3><span className="current-price-table--table__span">0.0009</span> BTC</h3>
        </div>

        <div className="col-xs-12 current-price-table--table__div">
          <img src={dogecoin} alt="Dogecoin Currency" />
          <h4>Dogecoin</h4>
          <h3><span className="current-price-table--table__span">0.0006</span> BTC</h3>
        </div>

        <div className="col-xs-12 current-price-table--table__div">
          <img src={monero} alt="Monero Currency" />
          <h4>Monero</h4>
          <h3><span className="current-price-table--table__span">0.0003</span> BTC</h3>
        </div>
      </div>
    </div>
  )
}

CurrentPriceTable.contextTypes = {}

export default CurrentPriceTable
