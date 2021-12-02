import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'
import { FC, HTMLAttributes } from 'react'

import { InputProps } from '../input/input'

type Placement = 'left' | 'right'

export interface IInputAddonProps extends DefaultProps {
  placement?: Placement
  size?: InputProps['size']
}

const _placement: Record<Placement, string> = {
  left: 'form-input-addon-left',
  right: 'form-input-addon-right'
}

const sizes = {
  xs: 'form-input-addon-xs',
  sm: 'form-input-addon-sm',
  md: 'form-input-addon-md',
  lg: 'form-input-addon-lg',
  xl: 'form-input-addon-xl'
}

export interface InputAddonProps
  extends HTMLAttributes<HTMLDivElement>,
    IInputAddonProps {}

export const InputAddon: FC<InputAddonProps> = ({
  placement = 'left',
  size = 'md',
  className,
  ...props
}) => {
  const classes = cx(
    'form-input-addon',
    sizes[size],
    _placement[placement],
    className
  )

  return <div className={classes} {...props} />
}

if (__IS_DEV__) {
  InputAddon.displayName = 'InputAddon'
}

export const InputLeftAddon: FC<InputAddonProps> = props => (
  <InputAddon placement='left' {...props} />
)

if (__IS_DEV__) {
  InputLeftAddon.displayName = 'InputLeftAddon'
}

export const InputRightAddon: FC<InputAddonProps> = props => (
  <InputAddon placement='right' {...props} />
)

if (__IS_DEV__) {
  InputRightAddon.displayName = 'InputRightAddon'
}
