import { createMemoClass, cx } from '@bx-design/react-ui-utils'

export const useTrClass = createMemoClass(() => {
  const classes = cx('table-tr')
  return classes
})
