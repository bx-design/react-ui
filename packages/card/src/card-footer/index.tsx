import { forwardRef, HTMLAttributes, ReactNode } from 'react'

import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'
import { useCardFooterClass } from './styles'

interface ICardFooterProps extends DefaultProps {
  children?: ReactNode
}

export interface CardFooterProps
  extends HTMLAttributes<HTMLDivElement>,
    ICardFooterProps {}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  (props, ref) => {
    const { children, className, ...rest } = props
    const classes = useCardFooterClass()

    return (
      <footer ref={ref} className={cx(classes, className)} {...rest}>
        {children}
      </footer>
    )
  }
)

if (__IS_DEV__) {
  CardFooter.displayName = 'CardFooter'
}
