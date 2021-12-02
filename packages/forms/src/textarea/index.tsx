import {
  forwardRef,
  RefAttributes,
  TextareaHTMLAttributes as ReactTextareaHTMLAttributes
} from 'react'

import { cx, __IS_DEV__ } from '@bx-design/react-ui-utils'
import { useFormControl } from '../form-control'
import { IInputProps, OmittedTypes } from '../input/input'
import { useInputClass } from '../input/styles'

type TextareaHTMLAttributes<T = HTMLTextAreaElement> = Omit<
  ReactTextareaHTMLAttributes<T>,
  OmittedTypes
>

export type TextareaProps<T = HTMLTextAreaElement> = IInputProps<T> &
  TextareaHTMLAttributes<T> &
  RefAttributes<T>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const {
      size = 'md',
      variant = 'outline',
      as: Comp = 'textarea',
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedby,
      className,
      id,
      ...rest
    } = props
    const { readOnly, disabled, invalid, required, ...formControl } =
      useFormControl(props)
    const classes = useInputClass({ size, disabled, variant })

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
        aria-describedby={ariaDescribedby}
        className={cx('form-textarea', classes, className)}
        id={id || formControl.id}
        {...rest}
      />
    )
  }
)

if (__IS_DEV__) {
  Textarea.displayName = 'Textarea'
}
