import { createMemoClass, cx } from '@bx-design/react-ui-utils'

export const useTheadClass = createMemoClass(() => {
  const classes = cx('table-thead')
  return classes
})
