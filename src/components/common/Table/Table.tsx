import { ResponsiveTableStyled, TableStyled } from './styles'
import TableBody from './TableBody'
import TableData from './TableData'
import TableHead from './TableHead'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

export default function Table({ children }: { children: React.ReactNode }) {
  return (
    <ResponsiveTableStyled>
      <TableStyled>{children}</TableStyled>
    </ResponsiveTableStyled>
  )
}

Table.Th = TableHeader
Table.Tr = TableRow
Table.Tbody = TableBody
Table.Td = TableData
Table.Thead = TableHead
