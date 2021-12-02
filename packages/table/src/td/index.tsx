import { forwardRef, TdHTMLAttributes } from 'react'
import { DefaultProps, __IS_DEV__, cx } from '@bx-design/react-ui-utils'
import { useTdClass } from './styles'

interface ITdProps extends DefaultProps {}

export interface TdProps
  extends TdHTMLAttributes<HTMLTableCellElement>,
    ITdProps {}

export const Td = forwardRef<HTMLTableCellElement, TdProps>((props, ref) => {
  const { className, ...rest } = props
  const classes = useTdClass(rest)
  return <td className={cx(classes, className)} {...rest} ref={ref} />
})

if (__IS_DEV__) {
  Td.displayName = 'Td'
}
