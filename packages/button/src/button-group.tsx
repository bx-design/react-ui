import { cloneElement, forwardRef, HTMLAttributes, ReactNode } from 'react'

import {
  DefaultProps,
  cx,
  __IS_DEV__,
  getValidChildren
} from '@bx-design/react-ui-utils'
import { ButtonProps } from './button'

interface IButtonGroupProps extends DefaultProps {
  attached?: boolean
  disabled?: boolean
  size?: ButtonProps['size']
  variant?: ButtonProps['variant']
  color?: ButtonProps['color']
  children?: ReactNode
}

export interface ButtonGroupProps
  extends HTMLAttributes<HTMLDivElement>,
    IButtonGroupProps {}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props, ref) => {
    const {
      size,
      color,
      variant,
      attached,
      disabled,
      children,
      className,
      ...rest
    } = props

    const validChildren = getValidChildren(children)
    const clones = validChildren.map(child => {
      return cloneElement(child, {
        size: size || child.props.size,
        color: child.props.color || color,
        variant: child.props.variant || variant,
        disabled: child.props.disabled || disabled
      })
    })

    return (
      <div
        ref={ref}
        role='group'
        className={cx('btn-group', attached && 'btn-group-attached', className)}
        {...rest}
      >
        {clones}
      </div>
    )
  }
)

if (__IS_DEV__) {
  ButtonGroup.displayName = 'ButtonGroup'
}
