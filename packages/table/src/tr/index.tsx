import { forwardRef, HTMLAttributes } from 'react'
import { DefaultProps, __IS_DEV__, cx } from '@bx-design/react-ui-utils'
import { useTrClass } from './styles'

interface ITrProps extends DefaultProps {}

export interface TrProps
  extends HTMLAttributes<HTMLTableRowElement>,
    ITrProps {}

export const Tr = forwardRef<HTMLTableRowElement, TrProps>((props, ref) => {
  const { className, ...rest } = props
  const classes = useTrClass(rest)
  return <tr className={cx(classes, className)} {...rest} ref={ref} />
})

if (__IS_DEV__) {
  Tr.displayName = 'Tr'
}
