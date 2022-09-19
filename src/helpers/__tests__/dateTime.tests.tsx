import {
  getDays,
  getHours,
  getHumanReadableDateInUTC,
  getMinutes,
  getOrdinal,
  getSeconds,
} from '../dateTime'

describe('Helpers: DateTime', () => {
  it('get days from ms', () => {
    const days = getDays(232275600)
    expect(days).toBe(2)
  })

  it('get hours from ms', () => {
    const hours = getHours(232275600)
    expect(hours).toBe(16)
  })

  it('get minutes from ms', () => {
    const minutes = getMinutes(232275600)
    expect(minutes).toBe(31)
  })

  it('get seconds from ms', () => {
    const seconds = getSeconds(232275600)
    expect(seconds).toBe(15)
  })

  it('convert ms to human readable date in UTC format', () => {
    const readableDateInUTC = getHumanReadableDateInUTC(
      '2022-10-15T17:05:20.729Z'
    )
    expect(readableDateInUTC).toBe('Oct 15th 2022, 17:05:20')
  })

  it('append correct ordinal to a specific day', () => {
    const days = [
      { test: 1, expect: '1st' },
      { test: 2, expect: '2nd' },
      { test: 3, expect: '3rd' },
      { test: 4, expect: '4th' },
      { test: 11, expect: '11th' },
      { test: 12, expect: '12th' },
      { test: 13, expect: '13th' },
      { test: 14, expect: '14th' },
      { test: 21, expect: '21st' },
      { test: 22, expect: '22nd' },
      { test: 23, expect: '23rd' },
      { test: 24, expect: '24th' },
      { test: 31, expect: '31st' },
    ]

    days.map((day) => {
      expect(getOrdinal(day.test)).toBe(day.expect)
    })
  })
})
