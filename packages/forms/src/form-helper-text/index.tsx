import { forwardRef, HTMLAttributes, ReactNode } from 'react'

import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'
import { useFormControl } from '../form-control'

interface IFormHelperTextProps extends DefaultProps {
  children?: ReactNode
}

export interface FormHelperTextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    IFormHelperTextProps {}

export const FormHelperText = forwardRef<
  HTMLParagraphElement,
  FormHelperTextProps
>((props, ref) => {
  const { className, id, ...rest } = props
  const classes = cx('form-helper-text', className)
  const formControl = useFormControl({})

  return (
    <p
      ref={ref}
      className={classes}
      id={id || formControl.helpTextId}
      {...rest}
    />
  )
})

if (__IS_DEV__) {
  FormHelperText.displayName = 'FormHelperText'
}
