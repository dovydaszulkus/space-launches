import { endpoints } from '../endpoints'

describe('Consts: Endpoints', () => {
  it('contains correct endpoints', () => {
    expect(endpoints.nextLaunch).toBe('/launches/next')
    expect(endpoints.upcomingLaunches).toBe('/launches/upcoming')
    expect(endpoints.launchpads).toBe('/launchpads')
  })
})
