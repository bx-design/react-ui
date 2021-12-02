import { createMemoClass, cx } from '@bx-design/react-ui-utils'

export const useCheckboxLabelClass = createMemoClass(props => {
  const sizes: Record<string, string> = {
    sm: 'form-checkbox-label-sm',
    md: 'form-checkbox-label-md',
    lg: 'form-checkbox-label-lg',
    xl: 'form-checkbox-label-xl'
  }

  const classes = cx('form-checkbox-label', sizes[props.size])

  return classes
})

export const useCheckboxClass = createMemoClass(props => {
  const sizes: Record<string, string> = {
    sm: 'form-checkbox-sm',
    md: 'form-checkbox-md',
    lg: 'form-checkbox-lg',
    xl: 'form-checkbox-xl'
  }

  const classes = cx(
    'form-checkbox',
    props.disabled && 'form-checkbox-disabled',
    sizes[props.size]
  )

  return classes
})
