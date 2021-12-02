import { forwardRef, HTMLAttributes, ReactNode } from 'react'

import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'
import { useFormControl } from '../form-control'

interface IFormLabelProps extends DefaultProps {
  disabled?: boolean
  children?: ReactNode
  htmlFor?: string
}

export interface FormLabelProps
  extends HTMLAttributes<HTMLLabelElement>,
    IFormLabelProps {}

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  (props, ref) => {
    const { children, className, htmlFor, id, ...rest } = props
    const formControl = useFormControl(rest)

    const classes = cx(
      'form-label',
      formControl.disabled && 'form-label-disabled',
      className
    )

    return (
      <label
        ref={ref}
        className={classes}
        htmlFor={htmlFor || formControl.id}
        id={id || formControl.labelId}
        {...rest}
      >
        {children}
        {formControl.required && <span />}
      </label>
    )
  }
)

if (__IS_DEV__) {
  FormLabel.displayName = 'FormLabel'
}

export const RequiredIndicator = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>((props, ref) => {
  const { className, ...rest } = props
  const classes = cx('form-required-indicator', className)

  return (
    <span ref={ref} className={classes} aria-hidden='true' {...rest}>
      {props.children || '*'}
    </span>
  )
})

if (__IS_DEV__) {
  RequiredIndicator.displayName = 'RequiredIndicator'
}
