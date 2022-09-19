import { render, screen } from '@testing-library/react'
import Table from '../Table'

const renderTable = () => {
  return render(
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>My Heading</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>My data</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  )
}

describe('<Table />', () => {
  it('render a table using Compound API approach', () => {
    renderTable()
    expect(screen.getByText(/My heading/i)).toBeInTheDocument()
    expect(screen.getByText(/My data/i)).toBeInTheDocument()
  })
})
