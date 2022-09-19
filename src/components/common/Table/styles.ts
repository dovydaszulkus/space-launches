import styled from 'styled-components'

const ResponsiveTableStyled = styled.div`
  overflow-x: auto;
`

const TableStyled = styled.table`
  text-align: left;
  color: white;
  width: 100%;

  th,
  td {
    border-bottom: 1px solid white;
    text-align: left;
    padding: 10px 16px;
  }
`

export { TableStyled, ResponsiveTableStyled }
