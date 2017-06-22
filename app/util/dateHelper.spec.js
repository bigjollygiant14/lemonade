import { getFormattedDate } from './dateHelper'

describe('Date Helper', () => {
  describe('getFormattedDate', () => {
    it('exists', () => {
      expect(getFormattedDate).not.toBeUndefined()
    })

    it('returns the locale formatted date', () => {
      expect(getFormattedDate('2017-06-22T00:34:47Z')).toEqual('Jun 21, 2017')
    })
  })
})
