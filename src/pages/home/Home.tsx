import PageLayout from '@/layout/pageLayout/PageLayout'
import ContentWrapper from '@/components/common/ContentWrapper/ContentWrapper'
import { endpoints } from '@/constants/endpoints'
import Counter from './components/Counter/Counter'
import useFetch from '@/hooks/useFetch'

export default function Home() {
  const [data, status, error] = useFetch(endpoints.nextLaunch)

  const { name, date_utc } = data
  // const crew5LaunchTimeInUTC = "2022-10-03T16:45:00.000Z"

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
    </PageLayout>
  )
}
