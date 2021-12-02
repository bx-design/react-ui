import { forwardRef, ThHTMLAttributes } from 'react'
import { DefaultProps, __IS_DEV__, cx } from '@bx-design/react-ui-utils'
import { useThClass } from './styles'

interface IThProps extends DefaultProps {}

export interface ThProps
  extends ThHTMLAttributes<HTMLTableCellElement>,
    IThProps {}

export const Th = forwardRef<HTMLTableCellElement, ThProps>((props, ref) => {
  const { className, ...rest } = props
  const classes = useThClass(rest)
  return <th className={cx(classes, className)} {...rest} ref={ref} />
})

if (__IS_DEV__) {
  Th.displayName = 'Th'
}
