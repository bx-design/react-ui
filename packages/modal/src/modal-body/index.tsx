import { forwardRef, HTMLAttributes, ReactNode } from 'react'

import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'
import { useModalBodyClass } from './styles'

interface IModalBodyProps extends DefaultProps {
  children?: ReactNode
}

export interface ModalBodyProps
  extends HTMLAttributes<HTMLDivElement>,
    IModalBodyProps {}

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  (props, ref) => {
    const { children, className, ...rest } = props
    const classes = useModalBodyClass()

    return (
      <div ref={ref} className={cx(classes, className)} {...rest}>
        {children}
      </div>
    )
  }
)

if (__IS_DEV__) {
  ModalBody.displayName = 'ModalBody'
}
