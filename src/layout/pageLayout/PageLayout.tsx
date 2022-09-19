import ContentWrapper from '@/components/common/ContentWrapper/ContentWrapper'
import Heading from '@/components/common/Heading/Heading'
import Loader from '@/components/common/Loader/Loader'
import Errors from '@/components/Errors/Errors'
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
            {showLoading ? (
              <ContentWrapper variant={contentBackgroundVariant} center>
                <Loader show={true} delay={400} />
              </ContentWrapper>
            ) : null}
            {showError ? (
              <ContentWrapper variant={contentBackgroundVariant}>
                <Errors />
              </ContentWrapper>
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
