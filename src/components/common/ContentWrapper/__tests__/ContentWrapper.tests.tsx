import { render, screen } from '@testing-library/react'
import ContentWrapper from '../ContentWrapper'

const renderContentWrapper = (props?: object) => {
  return render(
    <ContentWrapper variant="primary" {...props}>
      <h2>Hello testings</h2>
    </ContentWrapper>
  )
}

describe('<ContentWrapper />', () => {
  it('renders children elements', () => {
    renderContentWrapper()
    expect(screen.getByText(/Hello testings/i)).toBeInTheDocument()
  })
})
