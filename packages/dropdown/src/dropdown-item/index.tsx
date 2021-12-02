import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { Menu } from '@headlessui/react'
import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'
import { useDropdownItemClass } from './styles'

interface IDropdownItemProps extends DefaultProps {
  children?: ReactNode
  disabled?: boolean
}

export interface DropdownItemProps
  extends HTMLAttributes<HTMLDivElement>,
    IDropdownItemProps {}

export const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(
  (props, ref) => {
    const { children, className, disabled, ...rest } = props
    const classes = useDropdownItemClass()

    return (
      <Menu.Item disabled={disabled}>
        {({ active }) => (
          <div
            ref={ref}
            className={cx(classes, className, {
              'dropdown-item-active': active
            })}
            {...rest}
          >
            {children}
          </div>
        )}
      </Menu.Item>
    )
  }
)

if (__IS_DEV__) {
  DropdownItem.displayName = 'DropdownItem'
}
