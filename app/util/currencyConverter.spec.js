import { displayCurrency, convertDollarsToBitcoin, convertBitcoinToDollars } from './currencyConverter'

describe('Currency Converter', () => {
  describe('convertDollarsToBitcoin', () => {
    it('exists', () => {
      expect(convertDollarsToBitcoin).not.toBeUndefined()
    })

    it('returns the formatted currency', () => {
      let conversion = 100 / 2700
      expect(convertDollarsToBitcoin(100, 2700)).toEqual(conversion)
    })
  })

  describe('convertBitcoinToDollars', () => {
    it('exists', () => {
      expect(convertBitcoinToDollars).not.toBeUndefined()
    })

    it('returns the formatted currency', () => {
      let conversion = 100 * 2700
      expect(convertBitcoinToDollars(100, 2700)).toEqual(conversion)
    })
  })

  describe('displayCurrency', () => {
    it('exists', () => {
      expect(displayCurrency).not.toBeUndefined()
    })

    it('returns the formatted currency', () => {
      expect(displayCurrency(21000)).toEqual('$21,000.00')
      expect(displayCurrency(100)).toEqual('$100.00')
      expect(displayCurrency(200000)).toEqual('$200,000.00')
    })

    it('should remove hanging decimals in the thousandths +', () => {
      expect(displayCurrency(21000.009)).toEqual('$21,000.01')
    })
  })
})
