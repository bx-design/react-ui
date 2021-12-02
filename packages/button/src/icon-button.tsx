import {
  cloneElement,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  ReactElement
} from 'react'

import { cx, __IS_DEV__ } from '@bx-design/react-ui-utils'
import { Button, ButtonProps } from './button'

type OmittedProps = 'leftIcon' | 'rightIcon' | 'loadingText'

interface IIconButtonProps extends Omit<ButtonProps, OmittedProps> {
  icon?: ReactElement
}

export interface IconButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    IIconButtonProps {
  'aria-label'?: string
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const {
      icon,
      children,
      'aria-label': ariaLabel,
      className,
      ...rest
    } = props
    const classes = cx('btn-icon', className)

    const element = icon || children
    const _children = isValidElement(element) ? cloneElement(element, {}) : null

    return (
      <Button className={classes} ref={ref} aria-label={ariaLabel} {...rest}>
        {_children}
      </Button>
    )
  }
)

if (__IS_DEV__) {
  IconButton.displayName = 'IconButton'
}
