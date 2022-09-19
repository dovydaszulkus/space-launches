import styled from 'styled-components'
import { gradients } from '@/styles/theme'
import { VariantType } from '@/types'

const DivStyled = styled.div<{ variant: VariantType }>`
  background: ${({ variant }) => gradients.contentWrapper[variant]};
`

export { DivStyled }
