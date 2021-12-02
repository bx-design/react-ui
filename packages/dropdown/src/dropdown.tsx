import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { Menu } from '@headlessui/react'

import { DefaultProps, __IS_DEV__, cx } from '@bx-design/react-ui-utils'
import { useDropdownClass } from './styles'

interface IDropdownProps extends DefaultProps {
  children?: ReactNode
}

export interface DropdownProps
  extends HTMLAttributes<HTMLDivElement>,
    IDropdownProps {}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (props, ref) => {
    const { children, className, ...rest } = props
    const classes = useDropdownClass()
    return (
      <Menu as='div' className={cx(classes, className)} ref={ref} {...rest}>
        {children}
      </Menu>
    )
  }
)

if (__IS_DEV__) {
  Dropdown.displayName = 'Dropdown'
}
