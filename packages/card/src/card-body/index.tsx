import { forwardRef, HTMLAttributes, ReactNode } from 'react'

import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'
import { useCardBodyClass } from './styles'

interface ICardBodyProps extends DefaultProps {
  children?: ReactNode
}

export interface CardBodyProps
  extends HTMLAttributes<HTMLDivElement>,
    ICardBodyProps {}

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  (props, ref) => {
    const { children, className, ...rest } = props
    const classes = useCardBodyClass()

    return (
      <div ref={ref} className={cx(classes, className)} {...rest}>
        {children}
      </div>
    )
  }
)

if (__IS_DEV__) {
  CardBody.displayName = 'CardBody'
}
