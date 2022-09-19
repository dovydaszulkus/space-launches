import styled from 'styled-components'
import { gradients } from '@/styles/theme'
import { VariantType } from '@/types'

const DivStyled = styled.div<{ variant: VariantType; center?: boolean }>`
  background: ${({ variant }) => gradients.contentWrapper[variant]};
  padding: 20px;

  ${({ center }) =>
    center &&
    `
    display: flex;
    justify-content: center;
  `};
`

export { DivStyled }
