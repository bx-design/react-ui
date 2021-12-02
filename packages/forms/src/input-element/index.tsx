import { forwardRef, HTMLAttributes, ReactNode } from 'react'

import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'
import { InputProps } from '../input/input'

type Placement = 'left' | 'right'

interface IInputElementProps extends DefaultProps {
  placement?: Placement
  size?: InputProps['size']
  children?: ReactNode
  disabledPointerEvents?: boolean
}

const inputSizes = {
  xl: 'form-input-element-xl',
  lg: 'form-input-element-lg',
  md: 'form-input-element-md',
  sm: 'form-input-element-sm',
  xs: 'form-input-element-xs'
}

export interface InputElementProps
  extends HTMLAttributes<HTMLDivElement>,
    IInputElementProps {}

const InputElement = forwardRef<HTMLDivElement, InputElementProps>(
  (
    {
      size,
      children,
      placement = 'left',
      disabledPointerEvents = false,
      className,
      ...props
    },
    ref
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const sizeClass = inputSizes[size!]
    const placementProp = { [placement]: '0' }

    return (
      <div
        ref={ref}
        className={cx(
          'form-input-element',
          sizeClass,
          disabledPointerEvents && 'pointer-events-none',
          className
        )}
        style={placementProp}
        {...props}
      >
        {children}
      </div>
    )
  }
)

if (__IS_DEV__) {
  InputElement.displayName = 'InputElement'
}

export const InputLeftElement = forwardRef<HTMLDivElement, InputElementProps>(
  (props, ref) => <InputElement ref={ref} placement='left' {...props} />
)

if (__IS_DEV__) {
  InputLeftElement.displayName = 'InputLeftElement'
}

export const InputRightElement = forwardRef<HTMLDivElement, InputElementProps>(
  (props, ref) => <InputElement ref={ref} placement='right' {...props} />
)

if (__IS_DEV__) {
  InputRightElement.displayName = 'InputRightElement'
}
