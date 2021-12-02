import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { Checkbox as InternalCheckbox, CheckboxProps } from './checkbox'

interface Checkbox
  extends ForwardRefExoticComponent<
    CheckboxProps & RefAttributes<HTMLInputElement>
  > {}

const Checkbox = InternalCheckbox as Checkbox

export type { CheckboxProps }

export { Checkbox }
