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

export {
  calculateDateTimeDifferenceInUTCFormat,
  getDays,
  getHours,
  getMinutes,
  getSeconds,
}
