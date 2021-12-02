import { createMemoClass, cx } from '@bx-design/react-ui-utils'

const sizes: Record<string, string> = {
  sm: 'modal-sm',
  md: 'modal-md',
  lg: 'modal-lg',
  xl: 'modal-xl'
}

export const useModalClass = createMemoClass(props => {
  return cx('modal', sizes[props.size], {
    'modal-centered': props.centered,
    'modal-scrollable': props.scrollable,
    'modal-transparent': props.transparent
  })
})
