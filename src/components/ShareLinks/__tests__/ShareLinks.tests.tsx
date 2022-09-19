import { render, screen } from '@testing-library/react'
import ShareLinks from '../ShareLinks'

const renderShareLinks = (props?: object) => {
  return render(
    <ShareLinks emailSubject="Testings" twitterMessage="Testings" {...props} />
  )
}

describe('<ShareLinks />', () => {
  it('contains a "Share on" message', () => {
    renderShareLinks()
    expect(screen.getByText(/share on/i)).toBeInTheDocument()
  })

  it('contains twitter logo with correct attributes', () => {
    renderShareLinks()
    const twitterLinkElement = screen.getByRole('button', {
      name: 'Share on Twitter',
    })
    expect(twitterLinkElement).toHaveAttribute(
      'href',
      'https://twitter.com/intent/tweet?text=Testings'
    )
    expect(twitterLinkElement).toHaveAttribute('target', '_blank')
    expect(twitterLinkElement).toHaveAttribute('rel', 'noreferrer noopener')
    expect(twitterLinkElement).toHaveAttribute('aria-label', 'Share on Twitter')
  })
})
