import { VariantType } from '@/types'
import React from 'react'
import { DivStyled } from './styles'

export default function ContentWrapper({
  children,
  variant,
  center = false,
}: {
  children: React.ReactNode
  variant: VariantType
  center?: boolean
}) {
  return (
    <DivStyled variant={variant} center={center}>
      {children}
    </DivStyled>
  )
}
