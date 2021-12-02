import { createMemoClass, cx } from '@bx-design/react-ui-utils'

const backdrop: Record<string, string> = {
  static: 'modal-backdrop-static'
}

export const useModalBackdropClass = createMemoClass(props => {
  return cx('modal-backdrop', backdrop[props.backdrop])
})
