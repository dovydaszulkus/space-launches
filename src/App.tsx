import Header from '@/layout/header/Header'
import PageLayout from './layout/pageLayout/PageLayout'

function App() {
  return (
    <>
      <Header />
      <PageLayout
        headingText={`Upcoming: Test`}
        pageBackgroundVariant="primary"
        contentBackgroundVariant="primary"
      >
        <h1>Hello World</h1>
      </PageLayout>
    </>
  )
}

export default App
