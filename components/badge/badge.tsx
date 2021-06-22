import { forwardRef, memo } from 'react'
import cs from 'classnames'

import { BaseChildrenProps } from '../types'

export type VarianType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark'

export interface BadgeProps extends BaseChildrenProps {
  variant?: VarianType
  rounded?: boolean
}

const BadgeComponentRef = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = 'primary', rounded = false }: BadgeProps, ref) => {
    return (
      <span
        className={cs('badge', {
          'badge-primary': variant === 'primary',
          'badge-secondary': variant === 'secondary',
          'badge-success': variant === 'success',
          'badge-danger': variant === 'danger',
          'badge-warning': variant === 'warning',
          'badge-info': variant === 'info',
          'badge-dark': variant === 'dark',
          'badge-rounded': rounded,
        })}
        ref={ref}
        data-testid='badge'>
        <style jsx>
          {`
            .badge {
              display: inline-block;
              padding: 0.35em 0.65em;
              font-weight: 700;
              line-height: 1;
              text-align: center;
              white-space: nowrap;
              vertical-align: baseline;
              border-radius: 0.25rem;
              color: var(--bx-white);
            }
            .badge-primary {
              background-color: var(--bx-orange);
            }
            .badge-secondary {
              background-color: var(--bx-secondary);
            }
            .badge-success {
              background-color: var(--bx-green-future);
            }
            .badge-dark {
              background-color: var(--bx-dark);
            }
            .badge-danger {
              background-color: var(--bx-red-medium);
            }
            .badge-info {
              background-color: var(--bx-lblue);
              color: var(--bx-black);
            }
            .badge-warning {
              background-color: var(--bx-yellow-alert);
              color: var(--bx-black);
            }
            .badge-rounded {
              border-radius: 50rem;
            }
          `}
        </style>
        {children}
      </span>
    )
  },
)
BadgeComponentRef.displayName = 'BadgeComponentRef'

const Badge = memo(BadgeComponentRef)

export default Badge
