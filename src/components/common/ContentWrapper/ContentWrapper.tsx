import { VariantType } from '@/types'
import React from 'react'
import { DivStyled } from './styles'

export default function ContentWrapper({
  children,
  variant,
}: {
  children: React.ReactNode
  variant: VariantType
}) {
  return <DivStyled variant={variant}>{children}</DivStyled>
}
