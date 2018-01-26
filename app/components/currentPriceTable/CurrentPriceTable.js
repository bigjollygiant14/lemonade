import React from 'react'
import { PropTypes } from 'prop-types'
const litecoin = require('../../assets/litecoin.svg')
const dogecoin = require('../../assets/dogecoin.svg')
const monero = require('../../assets/monero.svg')

const CurrentPriceTable = () => {
  return (
    <div className="current-price-table row">
      <div className="current-price-table--table col-xs-12 col-sm-6 col-sm-offset-3">
        <div className="current-price-table--table--left">
          <h2><span className="current-price-table--table__span">0.0007</span> BTC</h2>
          <img src={litecoin} alt="Litecoin Currency" />
        </div>

        <div className="current-price-table--table--right">
          <div className="current-price-table--table--right__div">
            <h3><span className="current-price-table--table__span">0.0003</span> BTC</h3>
            <img src={dogecoin} alt="Dogecoin Currency" />
          </div>
          <div className="current-price-table--table--right__div">
            <h3><span className="current-price-table--table__span">0.0005</span> BTC</h3>
            <img src={monero} alt="Monero Currency" />
          </div>
        </div>
      </div>
    </div>
  )
}

CurrentPriceTable.contextTypes = {
  router: PropTypes.object
}

export default CurrentPriceTable
