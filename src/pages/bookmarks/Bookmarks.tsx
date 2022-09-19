import { useEffect, useState } from 'react'
import ContentWrapper from '@/components/common/ContentWrapper/ContentWrapper'
import PageLayout from '@/layout/pageLayout/PageLayout'
import Bookmark from '@/services/Bookmark'
import Table from '@/components/common/Table/Table'
import { InfoMessage } from './styles'
import { getHumanReadableDateInUTC } from '@/helpers/dateTime'

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState({})

  useEffect(() => {
    const bookmarkedLaunches = Bookmark.getBookmarks()
    setBookmarks(bookmarkedLaunches)
  }, [])

  const deleteBookmark = (id: string) => {
    const data = Bookmark.deleteBookmark(id)
    setBookmarks(data)
  }
  const numberOfbookmarks = Object.values(bookmarks).length

  return (
    <PageLayout
      headingText="Your bookmarks"
      pageBackgroundVariant="secondary"
      contentBackgroundVariant="secondary"
      showError={false}
      showLoading={false}
    >
      <ContentWrapper variant="secondary">
        {numberOfbookmarks < 1 && (
          <InfoMessage>You have no bookmarks.</InfoMessage>
        )}
        {numberOfbookmarks > 0 && (
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
              {Object.values(bookmarks).map((bookmark: any) => {
                const { date_utc, id, launchpad, name } = bookmark
                return (
                  <Table.Tr key={id}>
                    <Table.Td>{name}</Table.Td>
                    <Table.Td>{getHumanReadableDateInUTC(date_utc)}</Table.Td>
                    <Table.Td>{launchpad}</Table.Td>
                    <Table.Td>
                      <button type="button" onClick={() => deleteBookmark(id)}>
                        Remove bookmark
                      </button>
                    </Table.Td>
                  </Table.Tr>
                )
              })}
            </Table.Tbody>
          </Table>
        )}
      </ContentWrapper>
    </PageLayout>
  )
}
