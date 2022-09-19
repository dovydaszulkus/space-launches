import PageLayout from '@/layout/pageLayout/PageLayout'
import ContentWrapper from '@/components/common/ContentWrapper/ContentWrapper'
import { endpoints } from '@/constants/endpoints'
import Counter from './components/Counter/Counter'
import useFetch from '@/hooks/useFetch'
import ShareLinks from '@/components/ShareLinks/ShareLinks'
import { getHumanReadableDateInUTC } from '@/helpers/dateTime'

export default function Home() {
  const [data, status, error] = useFetch(endpoints.nextLaunch)

  const { name, date_utc } = data
  // const crew5LaunchTimeInUTC = "2022-10-03T16:45:00.000Z"
  const date = getHumanReadableDateInUTC(date_utc)

  const message = `${name} launches in ${date} (UTC time)`

  return (
    <PageLayout
      headingText={`Upcoming: ${name}`}
      pageBackgroundVariant="primary"
      contentBackgroundVariant="primary"
      showError={error}
      showLoading={status !== 'SUCCESS' && status !== 'ERROR'}
    >
      <ContentWrapper variant="primary">
        <Counter dateInUTCFormat={date_utc} />
      </ContentWrapper>
      <ShareLinks emailSubject={message} twitterMessage={message} />
    </PageLayout>
  )
}
