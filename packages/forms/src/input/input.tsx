import {
  ElementType,
  forwardRef,
  InputHTMLAttributes as ReactInputHTMLAttributes,
  RefAttributes
} from 'react'

import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'
import { useFormControl } from '../form-control'
import { useInputClass } from './styles'

export interface IInputProps<T = HTMLInputElement> extends DefaultProps {
  disabled?: ReactInputHTMLAttributes<T>['disabled']
  invalid?: boolean
  required?: ReactInputHTMLAttributes<T>['required']
  readOnly?: ReactInputHTMLAttributes<T>['readOnly']
  color?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'outline' | 'solid'
  as?: ElementType
  'aria-label'?: string
  'aria-describedby'?: string
}

export type OmittedTypes =
  | 'size'
  | 'disabled'
  | 'required'
  | 'checked'
  | 'defaultChecked'
  | 'readOnly'

export type InputHTMLAttributes = Omit<
  ReactInputHTMLAttributes<HTMLInputElement>,
  OmittedTypes
>

export type InputProps<T = HTMLElement> = IInputProps &
  InputHTMLAttributes &
  RefAttributes<T>

export const Input = forwardRef<HTMLElement, InputProps>((props, ref) => {
  const {
    size = 'md',
    variant = 'outline',
    color = 'primary',
    as: Comp = 'input',
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedBy,
    className,
    type = 'text',
    id,
    ...rest
  } = props
  const { readOnly, disabled, invalid, required, ...formControl } =
    useFormControl(props)
  const classes = useInputClass({ size, variant, disabled })

  return (
    <Comp
      ref={ref}
      readOnly={readOnly}
      aria-readonly={readOnly}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      aria-invalid={invalid}
      required={required}
      aria-required={required}
      aria-describedby={ariaDescribedBy}
      data-color={color ? color : undefined}
      className={cx(classes, className)}
      type={type}
      id={id || formControl.id}
      {...rest}
    />
  )
})

if (__IS_DEV__) {
  Input.displayName = 'Input'
}
