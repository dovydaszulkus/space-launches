import styled from 'styled-components'

const ParagraphStyled = styled.p`
  color: #fff;
  font-size: 2rem;
  text-align: center;
  padding: 30px;
`

export default function Errors() {
  return (
    <ParagraphStyled>
      Something went wrong and the page could not be loaded
    </ParagraphStyled>
  )
}
