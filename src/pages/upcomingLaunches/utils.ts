const buildLaunchpadData = (launchpads: any) => {
  const launchpadsFilteredData: { [key: string]: any } = {}
  launchpads.map((launchpad: any) => {
    const { id, name } = launchpad
    launchpadsFilteredData[id] = name
    return true
  })
  return launchpadsFilteredData
}

const buildUpcomingLaunchesData = ({
  launchpadMappedData,
  upcomingLaunchesRes,
}: {
  launchpadMappedData: any
  upcomingLaunchesRes: any
}) => {
  const upcomingLaunchesData = upcomingLaunchesRes.map(
    (upcomingLaunch: any) => {
      const { launchpad, name, date_utc, id } = upcomingLaunch
      return {
        id,
        name,
        date_utc,
        launchpad: launchpadMappedData[launchpad],
      }
    }
  )
  return upcomingLaunchesData
}

export { buildLaunchpadData, buildUpcomingLaunchesData }
