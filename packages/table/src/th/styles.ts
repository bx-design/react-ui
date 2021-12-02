import { createMemoClass, cx } from '@bx-design/react-ui-utils'

export const useThClass = createMemoClass(() => {
  const classes = cx('table-th')
  return classes
})
