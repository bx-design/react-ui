import { ForwardRefExoticComponent, RefAttributes } from 'react'

import { Dropdown as InternalDropdown, DropdownProps } from './dropdown'
import { DropdownButton, DropdownButtonProps } from './dropdown-button'
import { DropdownContent, DropdownContentProps } from './dropdown-content'
import { DropdownItem, DropdownItemProps } from './dropdown-item'

interface Dropdown
  extends ForwardRefExoticComponent<
    DropdownProps & RefAttributes<HTMLDivElement>
  > {
  Button: typeof DropdownButton
  Content: typeof DropdownContent
  Item: typeof DropdownItem
}

const Dropdown = InternalDropdown as Dropdown

Dropdown.Button = DropdownButton
Dropdown.Content = DropdownContent
Dropdown.Item = DropdownItem

export type {
  DropdownProps,
  DropdownButtonProps,
  DropdownContentProps,
  DropdownItemProps
}

export { Dropdown, DropdownButton, DropdownContent, DropdownItem }
