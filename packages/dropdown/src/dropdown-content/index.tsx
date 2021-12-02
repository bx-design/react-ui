import { forwardRef, Fragment, HTMLAttributes, ReactNode } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'
import { useDropdownContentClass } from './styles'

interface IDropdownContentProps extends DefaultProps {
  children?: ReactNode
}

export interface DropdownContentProps
  extends HTMLAttributes<HTMLDivElement>,
    IDropdownContentProps {}

export const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  (props, ref) => {
    const { children, className, ...rest } = props
    const classes = useDropdownContentClass()

    return (
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div ref={ref} className={cx(classes, className)} {...rest}>
            {children}
          </div>
        </Menu.Items>
      </Transition>
    )
  }
)

if (__IS_DEV__) {
  DropdownContent.displayName = 'DropdownContent'
}
