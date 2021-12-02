import { createMemoClass, cx } from '@bx-design/react-ui-utils'

export const useTableClass = createMemoClass(() => {
  const classes = cx('table')
  return classes
})
