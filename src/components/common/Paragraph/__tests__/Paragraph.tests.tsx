import { render, screen } from '@testing-library/react'
import Paragraph from '../Paragraph'

const renderParagraph = (props?: object) => {
  return render(<Paragraph {...props}>Hello testings</Paragraph>)
}

describe('<Paragraph />', () => {
  it('renders text on the page', () => {
    renderParagraph()
    expect(screen.getByText(/Hello testings/i)).toBeInTheDocument()
  })
})
