import { createMemoClass, cx } from '@bx-design/react-ui-utils'

export const useInputClass = createMemoClass(props => {
  const variantClasses: Record<string, string> = {
    outline: 'form-field-outline',
    solid: 'form-field-solid'
  }

  const sizes: Record<string, string> = {
    xs: 'form-field-xs',
    sm: 'form-field-sm',
    md: 'form-field-md',
    lg: 'form-field-lg',
    xl: 'form-field-xl'
  }

  const classes = cx(
    'form-field',
    sizes[props.size],
    variantClasses[props.variant],
    props.disabled && 'form-field-disabled'
  )
  return classes
})
