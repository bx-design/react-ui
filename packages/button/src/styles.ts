import { cx, createMemoClass } from '@bx-design/react-ui-utils'

export const useButtonClass = createMemoClass(props => {
  const variantClasses: Record<string, string> = {
    outline: 'btn-outline',
    solid: 'btn-solid',
    link: 'btn-link'
  }
  const sizes: Record<string, string> = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
    xl: 'btn-xl'
  }

  const colorVariant: Record<string, Record<string, string>> = {
    solid: {
      primary: 'btn-solid-primary',
      secondary: 'btn-solid-secondary',
      lorange: 'btn-solid-lorange',
      lblue: 'btn-solid-lblue'
    },
    outline: {
      primary: 'btn-outline-primary',
      secondary: 'btn-outline-secondary',
      lorange: 'btn-outline-lorange',
      lblue: 'btn-outline-lblue'
    }
  }

  const classes = cx(
    'btn',
    sizes[props.size],
    variantClasses[props.variant],
    colorVariant[props.variant][props.colorVariant],
    props.disabled && 'btn-disabled'
  )

  return classes
})
