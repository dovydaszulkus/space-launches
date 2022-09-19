import { useEffect, useState } from 'react'
import ContentWrapper from '@/components/common/ContentWrapper/ContentWrapper'
import PageLayout from '@/layout/pageLayout/PageLayout'
import useFetch from '@/hooks/useFetch'
import Bookmark from '@/services/Bookmark'
import { buildLaunchpadData, buildUpcomingLaunchesData } from './utils'
import { endpoints } from '@/constants/endpoints'
import { getHumanReadableDateInUTC } from '@/helpers/dateTime'
import Table from '@/components/common/Table/Table'

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
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Mission</Table.Th>
              <Table.Th>Date (UTC)</Table.Th>
              <Table.Th>Launchpad</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {upcomingLaunchesData.map((upcomingLaunch: any) => {
              const { name, date_utc, launchpad, id } = upcomingLaunch
              const bookmarkExists = bookmarks[id]

              return (
                <Table.Tr key={id}>
                  <Table.Td>{name}</Table.Td>
                  <Table.Td>{getHumanReadableDateInUTC(date_utc)}</Table.Td>
                  <Table.Td>{launchpad}</Table.Td>
                  <Table.Td>
                    <button
                      type="button"
                      disabled={bookmarkExists}
                      onClick={() => addToFavorites(upcomingLaunch)}
                    >
                      {bookmarkExists
                        ? 'Already bookmarked'
                        : 'Add to bookmarks'}
                    </button>
                  </Table.Td>
                </Table.Tr>
              )
            })}
          </Table.Tbody>
        </Table>
      </ContentWrapper>
    </PageLayout>
  )
}
