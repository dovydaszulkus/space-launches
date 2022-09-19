import { useEffect, useState } from 'react'
import ContentWrapper from '@/components/common/ContentWrapper/ContentWrapper'
import PageLayout from '@/layout/pageLayout/PageLayout'
import useFetch from '@/hooks/useFetch'
import Bookmark from '@/services/Bookmark'
import { buildLaunchpadData, buildUpcomingLaunchesData } from './utils'
import { Table } from './styles'
import { endpoints } from '@/constants/endpoints'
import { getHumanReadableDateInUTC } from '@/helpers/dateTime'

export default function UpcomingLaunches() {
  const [bookmarks, setBookmarks] = useState<any>({})

  const [launchpadsRes, launchpadsStatus, launchpadsError] = useFetch(
    endpoints.launchpads
  )
  const [upcomingLaunchesRes, upcomingLaunchesStatus, upcomingLaunchesError] =
    useFetch(endpoints.upcomingLaunches)

  const showError = launchpadsError || upcomingLaunchesError
  const showLoading =
    upcomingLaunchesStatus === 'LOADING' || launchpadsStatus === 'LOADING'

  let launchpadMappedData
  let upcomingLaunchesData

  launchpadMappedData = buildLaunchpadData(launchpadsRes)
  upcomingLaunchesData = buildUpcomingLaunchesData({
    launchpadMappedData,
    upcomingLaunchesRes,
  })

  useEffect(() => {
    const bookmarks = Bookmark.getBookmarks()
    setBookmarks(bookmarks)
  }, [])

  const addToFavorites = (upcomingLaunch: any) => {
    const newBookmark = {
      [upcomingLaunch.id.toString()]: {
        ...upcomingLaunch,
      },
    }

    const updatedBookmarks = Bookmark.addBookmark(newBookmark)
    setBookmarks(updatedBookmarks)
  }

  return (
    <PageLayout
      headingText="Upcoming - Next Launches"
      pageBackgroundVariant="secondary"
      contentBackgroundVariant="secondary"
      showError={showError}
      showLoading={showLoading}
    >
      <ContentWrapper variant="secondary">
        <Table>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Date (UTC)</th>
              <th>Launchpad</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {upcomingLaunchesData.map((upcomingLaunch: any) => {
              const { name, date_utc, launchpad, id } = upcomingLaunch
              const bookmarkExists = bookmarks[id]

              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{getHumanReadableDateInUTC(date_utc)}</td>
                  <td>{launchpad}</td>
                  <td>
                    <button
                      type="button"
                      disabled={bookmarkExists}
                      onClick={() => addToFavorites(upcomingLaunch)}
                    >
                      {bookmarkExists
                        ? 'Already bookmarked'
                        : 'Add to bookmarks'}
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </ContentWrapper>
    </PageLayout>
  )
}
