const calculateDateTimeDifferenceInUTCFormat = (date: string) => {
  const launchDateTimeInUtcFormat = new Date(date)
  const localDateTimeInUtcString = new Date().toUTCString()
  const todaysDateTimeInUtcFormat = new Date(localDateTimeInUtcString)

  const difference =
    launchDateTimeInUtcFormat.getTime() - todaysDateTimeInUtcFormat.getTime()

  return difference
}

const getDays = (timeInMilliseconds: number) => {
  const days = Math.floor(timeInMilliseconds / (1000 * 60 * 60 * 24))
  return days
}

const getHours = (timeInMilliseconds: number) => {
  const hours = Math.floor((timeInMilliseconds / (1000 * 60 * 60)) % 24)
  return hours
}

const getMinutes = (timeInMilliseconds: number) => {
  const minutes = Math.floor((timeInMilliseconds / (1000 * 60)) % 60)
  return minutes
}

const getSeconds = (timeInMilliseconds: number) => {
  const seconds = Math.floor((timeInMilliseconds / 1000) % 60)
  return seconds
}

const getOrdinal = (day: number) => {
  const first = day % 10
  const last = day % 100

  if (first === 1 && last !== 11) return day + 'st'
  if (first === 2 && last !== 12) return day + 'nd'
  if (first === 3 && last !== 13) return day + 'rd'

  return day + 'th'
}

const getHumanReadableDateInUTC = (date: string) => {
  const dateInUTC = new Date(date).toUTCString()
  const dateInArray = dateInUTC.split(' ')
  const day = getOrdinal(parseInt(dateInArray[1]))
  const month = dateInArray[2]
  const year = dateInArray[3]
  const time = dateInArray[4]

  const humandReadableDate = `${month} ${day} ${year}, ${time}`

  return humandReadableDate
}

export {
  calculateDateTimeDifferenceInUTCFormat,
  getDays,
  getHours,
  getMinutes,
  getSeconds,
  getHumanReadableDateInUTC,
  getOrdinal,
}
