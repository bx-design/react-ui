import { forwardRef, HTMLAttributes } from 'react'
import { DefaultProps, __IS_DEV__, cx } from '@bx-design/react-ui-utils'
import { useTheadClass } from './styles'

interface ITheadProps extends DefaultProps {}

export interface TheadProps
  extends HTMLAttributes<HTMLTableSectionElement>,
    ITheadProps {}

export const Thead = forwardRef<HTMLTableSectionElement, TheadProps>(
  (props, ref) => {
    const { className, ...rest } = props
    const classes = useTheadClass(rest)
    return <thead className={cx(classes, className)} {...rest} ref={ref} />
  }
)

if (__IS_DEV__) {
  Thead.displayName = 'Thead'
}
