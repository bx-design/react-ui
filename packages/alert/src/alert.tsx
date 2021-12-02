import { forwardRef, HTMLAttributes, ReactElement } from 'react'
import {
  BxCancel,
  BxExclamation,
  BxHappy,
  BxInfo
} from '@bx-design/react-icons'

import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'
import { useAlertClass } from './styles'

interface IAlertProps extends DefaultProps {
  variant: 'success' | 'danger' | 'warning' | 'info'
  fullWidth?: boolean
  customIcon?: ReactElement
}

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    IAlertProps {}

const alertIcons: Record<AlertProps['variant'], ReactElement> = {
  success: <BxHappy size='33' />,
  danger: <BxCancel size='33' />,
  warning: <BxExclamation size='33' />,
  info: <BxInfo size='33' />
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    variant = 'warning',
    fullWidth = false,
    customIcon,
    className,
    children,
    ...rest
  } = props
  const classes = useAlertClass({ variant, fullWidth })

  return (
    <div ref={ref} className={cx(classes, className)} {...rest}>
      <div className='alert-icon'>{customIcon || alertIcons[variant]}</div>
      <div className='alert-content'>{children}</div>
    </div>
  )
})

if (__IS_DEV__) {
  Alert.displayName = 'Alert'
}
