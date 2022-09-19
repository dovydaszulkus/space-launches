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
  showError,
  showLoading,
}: {
  headingText: string
  pageBackgroundVariant: VariantType
  contentBackgroundVariant: VariantType
  children: React.ReactNode
  showError: boolean
  showLoading: boolean
}) {
  const showContent = !showLoading && !showError
  return (
    <>
      <ThemeProvider theme={{ pageBackgroundVariant }}>
        <GlobalStyles />
        <MainStyled>
          <section>
            {showLoading ? <p>Loading...</p> : null}
            {showError ? (
              <p>Something went wrong and the page could not be loaded...</p>
            ) : null}
            {showContent && (
              <>
                <Heading text={headingText} />
                <ContentWrapper variant={contentBackgroundVariant}>
                  {children}
                </ContentWrapper>
              </>
            )}
          </section>
        </MainStyled>
      </ThemeProvider>
    </>
  )
}
