import { forwardRef, HTMLAttributes } from 'react'
import { DefaultProps, __IS_DEV__, cx } from '@bx-design/react-ui-utils'
import { useTbodyClass } from './styles'

interface ITbodyProps extends DefaultProps {}

export interface TbodyProps
  extends HTMLAttributes<HTMLTableSectionElement>,
    ITbodyProps {}

export const Tbody = forwardRef<HTMLTableSectionElement, TbodyProps>(
  (props, ref) => {
    const { className, ...rest } = props
    const classes = useTbodyClass(rest)
    return <tbody className={cx(classes, className)} {...rest} ref={ref} />
  }
)

if (__IS_DEV__) {
  Tbody.displayName = 'Tbody'
}
