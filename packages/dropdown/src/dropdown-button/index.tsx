import { forwardRef, Fragment, HTMLAttributes, ReactNode } from 'react'
import { Menu } from '@headlessui/react'
import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'
import { useDropdownButtonClass } from './styles'

interface IDropdownButtonProps extends DefaultProps {
  children?: ReactNode
}

export interface DropdownButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    IDropdownButtonProps {}

export const DropdownButton = forwardRef<
  HTMLButtonElement,
  DropdownButtonProps
>((props, ref) => {
  const { children, className, ...rest } = props
  const classes = useDropdownButtonClass()

  return (
    <Menu.Button as={Fragment}>
      <button ref={ref} className={cx(classes, className)} {...rest}>
        {children}
      </button>
    </Menu.Button>
  )
})

if (__IS_DEV__) {
  DropdownButton.displayName = 'DropdownButton'
}
