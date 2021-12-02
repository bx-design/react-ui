import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'
import { useFormControl } from '../form-control'

interface IFormErrorMessageProps extends DefaultProps {
  children?: ReactNode
}

export interface FormErrorMessageProps
  extends HTMLAttributes<HTMLDivElement>,
    IFormErrorMessageProps {}

export const FormErrorMessage = forwardRef<
  HTMLParagraphElement,
  FormErrorMessageProps
>((props, ref) => {
  const { className, id, ...rest } = props
  const classes = cx('form-error-message', className)
  const formControl = useFormControl({})

  return (
    <div
      ref={ref}
      className={classes}
      id={id || formControl.errorId}
      {...rest}
    />
  )
})

if (__IS_DEV__) {
  FormErrorMessage.displayName = 'FormErrorMessage'
}
