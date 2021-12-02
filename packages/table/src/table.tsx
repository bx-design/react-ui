import { forwardRef, TableHTMLAttributes } from 'react'
import { DefaultProps, __IS_DEV__, cx } from '@bx-design/react-ui-utils'
import { useTableClass } from './styles'

interface ITableProps extends DefaultProps {}

export interface TableProps
  extends TableHTMLAttributes<HTMLTableElement>,
    ITableProps {}

export const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  const { className, ...rest } = props
  const classes = useTableClass(rest)
  return <table className={cx(classes, className)} {...rest} ref={ref} />
})

if (__IS_DEV__) {
  Table.displayName = 'Table'
}
