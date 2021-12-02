import { forwardRef, HTMLAttributes, ReactElement, ReactNode } from 'react'

import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'
import { Spinner } from '@bx-design/react-ui-spinner'
import { useButtonClass } from './styles'

interface IButtonProps extends DefaultProps {
  loading?: boolean
  disabled?: boolean
  active?: boolean
  loadingText?: string
  type?: 'button' | 'reset' | 'submit'
  leftIcon?: ReactElement
  rightIcon?: ReactElement
  colorVariant?: 'primary' | 'secondary' | 'lorange' | 'lblue'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'link' | 'solid' | 'outline'
  children?: ReactNode
}

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    IButtonProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      disabled: _disabled,
      loading,
      active,
      loadingText,
      type,
      leftIcon,
      rightIcon,
      children,
      className,
      variant = 'solid',
      size = 'md',
      colorVariant = 'primary',
      ...rest
    } = props

    const disabled = _disabled || loading
    const classes = useButtonClass({
      variant,
      size,
      disabled,
      colorVariant
    })

    return (
      <button
        ref={ref}
        disabled={disabled}
        aria-disabled={disabled}
        type={type}
        data-active={active ? 'true' : undefined}
        className={cx(classes, className)}
        {...rest}
      >
        {leftIcon && !loading ? leftIcon : null}
        {loading && (
          <Spinner
            className={cx(
              loadingText ? 'relative' : 'absolute',
              loadingText ? `mr-2` : 'mr-0'
            )}
            size='sm'
          />
        )}
        {loading
          ? loadingText || <span className='opacity-0'>{children}</span>
          : children}
        {rightIcon && !loading ? rightIcon : null}
      </button>
    )
  }
)

if (__IS_DEV__) {
  Button.displayName = 'Button'
}
