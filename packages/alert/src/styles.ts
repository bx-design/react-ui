import { createMemoClass, cx } from '@bx-design/react-ui-utils'

export const useAlertClass = createMemoClass(props => {
  const variantClass: Record<string, string> = {
    success: 'alert-success',
    danger: 'alert-danger',
    warning: 'alert-warning',
    info: 'alert-info'
  }
  return cx('alert', variantClass[props.variant], {
    'alert-fullwidth': props.fullWidth
  })
})
