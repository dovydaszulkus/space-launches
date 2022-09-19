import { render, screen } from '@testing-library/react'
import Errors from '../Errors'

const renderErrors = () => {
  return render(<Errors />)
}

describe('<Errors />', () => {
  it('renders a correct error message', () => {
    renderErrors()
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
  })
})
