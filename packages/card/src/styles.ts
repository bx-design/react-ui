import { createMemoClass, cx } from '@bx-design/react-ui-utils'

const sizes: Record<string, string> = {
  sm: 'card-sm',
  md: 'card-md'
}

export const useCardClass = createMemoClass(props => {
  return cx('card', sizes[props.size])
})
