import ContentWrapper from '@/components/common/ContentWrapper/ContentWrapper'
import Heading from '@/components/common/Heading/Heading'
import { VariantType } from '@/types'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, MainStyled } from './styles'

export default function PageLayout({
  headingText,
  pageBackgroundVariant,
  contentBackgroundVariant,
  children,
}: {
  headingText: string
  pageBackgroundVariant: VariantType
  contentBackgroundVariant: VariantType
  children: React.ReactNode
}) {
  return (
    <>
      <ThemeProvider theme={{ pageBackgroundVariant }}>
        <GlobalStyles />
        <MainStyled>
          <section>
            <Heading text={headingText} />
            <ContentWrapper variant={contentBackgroundVariant}>
              {children}
            </ContentWrapper>
          </section>
        </MainStyled>
      </ThemeProvider>
    </>
  )
}
