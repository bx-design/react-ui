import { ForwardRefExoticComponent, RefAttributes } from 'react'

import { Table as InternalTable, TableProps } from './table'
import { Thead, TheadProps } from './thead'
import { Tbody, TbodyProps } from './tbody'
import { Th, ThProps } from './th'
import { Td, TdProps } from './td'
import { Tr, TrProps } from './tr'

interface Table
  extends ForwardRefExoticComponent<TableProps & RefAttributes<HTMLElement>> {
  Head: typeof Thead
  Body: typeof Tbody
  Th: typeof Th
  Td: typeof Td
  Tr: typeof Tr
}

const Table = InternalTable as Table

Table.Head = Thead
Table.Body = Tbody
Table.Th = Th
Table.Td = Td
Table.Tr = Tr

export type { TableProps, TheadProps, TbodyProps, ThProps, TdProps, TrProps }

export { Table }
