import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'

import { useModalFooterClass } from './styles'

interface IModalFooterProps extends DefaultProps {
  children?: ReactNode
}

export interface ModalFooterProps
  extends HTMLAttributes<HTMLDivElement>,
    IModalFooterProps {}

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  (props, ref) => {
    const { children, className, ...rest } = props
    const classes = useModalFooterClass()

    return (
      <div ref={ref} className={cx(classes, className)} {...rest}>
        {children}
      </div>
    )
  }
)

if (__IS_DEV__) {
  ModalFooter.displayName = 'ModalFooter'
}
