import { VariantType } from './../../types/index'
import styled, { createGlobalStyle } from 'styled-components'
import { gradients } from '@/styles/theme'

interface GlobalStyleProps {
  theme: {
    pageBackgroundVariant: VariantType
  }
}

const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
  body {
    background: ${({ theme: { pageBackgroundVariant } }) =>
      pageBackgroundVariant && gradients.pageBackground[pageBackgroundVariant]}
  }
`

const MainStyled = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`

export { GlobalStyles, MainStyled }
