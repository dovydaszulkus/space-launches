import styled from 'styled-components'
import Paragraph from '@/components/common/Paragraph/Paragraph'

const ParagraphStyled = styled(Paragraph)`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const CounterValue = styled.span`
  color: white;
  font-size: calc(1.75rem + 6vw);
  font-weight: 300;
  line-height: 1.2;
  text-align: center;

  margin: 0;

  display: flex;
  flex-direction: column;
`

const CounterText = styled.span`
  display: inline-flex;
  font-size: 1.75rem;
  font-weight: 300;
  border: solid 1px white;
  border-radius: 3px;
  padding: 7px 5px;
  text-transform: uppercase;

  align-self: center;
`

export { CounterText, CounterValue, ParagraphStyled }
