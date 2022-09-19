import styled from 'styled-components'

const ListStyled = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  gap: 10px;

  li {
    width: 44px;
  }
`

const ParagrpahStyled = styled.p`
  color: white;
  font-size: 1.125rem;
`

export { ListStyled, ParagrpahStyled }
