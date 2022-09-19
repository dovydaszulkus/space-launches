import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PageLayout from '../PageLayout'

const renderPageLayout = () => {
  return render(
    <BrowserRouter>
      <PageLayout
        contentBackgroundVariant="primary"
        pageBackgroundVariant="primary"
        headingText="Upcoming: SXM-8"
      >
        <h2>Your content</h2>
      </PageLayout>
    </BrowserRouter>
  )
}

describe('<PageLayout />', () => {
  it('has the main heading', () => {
    renderPageLayout()
    const mainHeadingElement = screen.getAllByRole('heading', {
      level: 1,
      name: /Upcoming/i,
    })[0]

    expect(mainHeadingElement).toHaveTextContent('Upcoming: SXM-8')
  })

  it('renders children components', () => {
    renderPageLayout()
    const childrenElement = screen.getAllByRole('heading', {
      level: 2,
      name: /Your content/i,
    })[0]

    expect(childrenElement).toHaveTextContent('Your content')
  })
})

export {}
