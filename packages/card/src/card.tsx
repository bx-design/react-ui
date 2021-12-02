import { forwardRef, HTMLAttributes, ReactNode } from 'react'

import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'
import { useCardClass } from './styles'

interface ICardProps extends DefaultProps {
  size?: 'sm' | 'md'
  children?: ReactNode
}

export interface CardProps extends HTMLAttributes<HTMLDivElement>, ICardProps {}

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { size = 'md', className, children, ...rest } = props

  const classes = useCardClass({ size })

  return (
    <div ref={ref} className={cx(classes, className)} {...rest}>
      {children}
    </div>
  )
})

if (__IS_DEV__) {
  Card.displayName = 'Card'
}
