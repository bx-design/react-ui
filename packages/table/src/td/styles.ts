import { createMemoClass, cx } from '@bx-design/react-ui-utils'

export const useTdClass = createMemoClass(() => {
  const classes = cx('table-td')
  return classes
})
