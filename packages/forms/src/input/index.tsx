import { ForwardRefExoticComponent, RefAttributes } from 'react'

import { Input as InternalInput, InputProps } from './input'
import { InputGroup, InputGroupProps } from '../input-group'
import {
  InputLeftAddon,
  InputRightAddon,
  InputAddonProps
} from '../input-addon'
import {
  InputLeftElement,
  InputRightElement,
  InputElementProps
} from '../input-element'

interface Input
  extends ForwardRefExoticComponent<InputProps & RefAttributes<HTMLElement>> {
  Group: typeof InputGroup

  LeftAddon: typeof InputLeftAddon
  RightAddon: typeof InputRightAddon

  LeftElement: typeof InputLeftElement
  RightElement: typeof InputRightElement
}

const Input = InternalInput as Input

Input.Group = InputGroup
Input.LeftAddon = InputLeftAddon
Input.RightAddon = InputRightAddon
Input.LeftElement = InputLeftElement
Input.RightElement = InputRightElement

export type { InputProps, InputGroupProps, InputAddonProps, InputElementProps }

export { Input }
