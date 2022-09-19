import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../Header'

const renderHeader = () => {
  return render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}

describe('<Header />', () => {
  it('has correct brand logo', () => {
    renderHeader()
    const brandNameElement = screen.getAllByRole('link', {
      name: /SpaceLaunches/i,
    })[0]
    expect(brandNameElement).toHaveAttribute('href', '/')
  })

  it('has correct navigation links', () => {
    renderHeader()
    const nextLaunchLinkElement = screen.getAllByRole('link', {
      name: /Next launch/i,
    })[0]
    const upcomingLaunchesElement = screen.getAllByRole('link', {
      name: /Upcoming launches/i,
    })[0]
    const bookmarksElement = screen.getAllByRole('link', {
      name: /Bookmarks/i,
    })[0]

    expect(nextLaunchLinkElement).toHaveAttribute('href', '/')
    expect(upcomingLaunchesElement).toHaveAttribute(
      'href',
      '/upcoming-launches'
    )
    expect(bookmarksElement).toHaveAttribute('href', '/bookmarks')
  })
})

export {}
