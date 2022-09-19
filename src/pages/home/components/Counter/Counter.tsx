import {
  calculateDateTimeDifferenceInUTCFormat,
  getDays,
  getHours,
  getMinutes,
  getSeconds,
} from '@/helpers/dateTime'
import { useEffect, useState } from 'react'
import { CounterText, CounterValue, ParagraphStyled } from './style'

export default function Counter({
  dateInUTCFormat,
}: {
  dateInUTCFormat: string
}) {
  const [timeDifference, setTimeDifference] = useState(0)

  useEffect(() => {
    const difference = calculateDateTimeDifferenceInUTCFormat(dateInUTCFormat)
    setTimeDifference(difference)
  }, [dateInUTCFormat])

  useEffect(() => {
    const countdownTimer = setTimeout(() => {
      const difference = calculateDateTimeDifferenceInUTCFormat(dateInUTCFormat)
      setTimeDifference(difference)
    }, 1000)

    return () => clearTimeout(countdownTimer)
  })

  const days = getDays(timeDifference)
  const hours = getHours(timeDifference)
  const minutes = getMinutes(timeDifference)
  const seconds = getSeconds(timeDifference)

  const hasMinutePassed = seconds === 0

  return (
    <>
      <ParagraphStyled aria-hidden>
        <CounterValue>{days}</CounterValue> <CounterText>days</CounterText>{' '}
        <CounterValue>{hours}</CounterValue> <CounterText>hours</CounterText>{' '}
        <CounterValue>{minutes}</CounterValue>{' '}
        <CounterText>minutes</CounterText>{' '}
        <CounterValue>{seconds}</CounterValue>{' '}
        <CounterText>seconds</CounterText>
      </ParagraphStyled>
      <p
        role="timer"
        aria-atomic="true"
        aria-live={hasMinutePassed ? 'polite' : 'off'}
        className="sr-only"
      >
        {days} days {hours} hours {minutes} minutes and {seconds} seconds
      </p>
    </>
  )
}
