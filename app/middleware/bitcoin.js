import * as actions from '../actions/BitcoinActions'
import ioClient from 'socket.io-client'

export default function (store) {
  const bitcoinSocket = ioClient.connect('http://localhost:5000/api/bitcoin')

  bitcoinSocket.on('priceUpdate', (data) => {
    store.dispatch(actions.updatePrice(data.response.data))
  })
}
