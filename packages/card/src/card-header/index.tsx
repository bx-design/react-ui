import { forwardRef, HTMLAttributes, ReactNode } from 'react'

import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'
import { useCardHeaderClass } from './styles'

interface ICardHeaderProps extends DefaultProps {
  children?: ReactNode
}

export interface CardHeaderProps
  extends HTMLAttributes<HTMLDivElement>,
    ICardHeaderProps {}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  (props, ref) => {
    const { children, className, ...rest } = props
    const classes = useCardHeaderClass()

    return (
      <header ref={ref} className={cx(classes, className)} {...rest}>
        {children}
      </header>
    )
  }
)

if (__IS_DEV__) {
  CardHeader.displayName = 'CardHeader'
}
