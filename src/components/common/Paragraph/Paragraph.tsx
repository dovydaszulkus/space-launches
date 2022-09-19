import { ParagraphStyled } from './styles'

interface ParagraphProps {
  children: React.ReactNode
}

export default function Paragraph({ children, ...props }: ParagraphProps) {
  return <ParagraphStyled {...props}>{children}</ParagraphStyled>
}
