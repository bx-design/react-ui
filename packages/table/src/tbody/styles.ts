import { createMemoClass, cx } from '@bx-design/react-ui-utils'

export const useTbodyClass = createMemoClass(() => {
  const classes = cx('table-tbody')
  return classes
})
