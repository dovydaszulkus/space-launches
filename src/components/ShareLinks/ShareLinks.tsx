import Twitter from '@/assets/images/twitter.svg'
import Email from '@/assets/images/email.svg'
import { ListStyled, ParagrpahStyled } from './styles'

export default function ShareLinks({
  emailSubject,
  twitterMessage,
}: {
  emailSubject: string
  twitterMessage: string
}) {
  const encodeMessageToURI = (text: string) => {
    return encodeURIComponent(text)
  }

  const emailSubjectEncoded = encodeMessageToURI(emailSubject)
  const twitterMessageEncoded = encodeMessageToURI(twitterMessage)

  return (
    <div>
      <ParagrpahStyled>Share on:</ParagrpahStyled>
      <ListStyled>
        <li>
          <a
            className="twitter-share-button"
            href={`https://twitter.com/intent/tweet?text=${twitterMessageEncoded}`}
            role="button"
            aria-label="Share on Twitter"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>
              <img src={Twitter} alt="" />
            </span>
          </a>
        </li>
        <li>
          <a
            className="twitter-share-button"
            href={`mailto:?subject=${emailSubjectEncoded}`}
            role="button"
            aria-label="Share on Email"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>
              <img src={Email} alt="" />
            </span>
          </a>
        </li>
      </ListStyled>
    </div>
  )
}
