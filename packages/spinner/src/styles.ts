import { createMemoClass, cx } from '@bx-design/react-ui-utils'

export const useSpinnerClass = createMemoClass(props => {
  const sizes: Record<string, string> = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  const className = cx('animate-spin', sizes[props.size])
  return className
})
