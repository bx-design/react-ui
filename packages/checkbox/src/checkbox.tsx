/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  InputHTMLAttributes,
  ReactNode,
  ChangeEventHandler,
  forwardRef,
  useEffect,
  useRef
} from 'react'

import { useFormControl } from '@bx-design/react-ui-forms'
import {
  DefaultProps,
  cx,
  __IS_DEV__,
  useForkRef
} from '@bx-design/react-ui-utils'
import { useCheckboxClass, useCheckboxLabelClass } from './styles'

interface ICheckboxProps<T = HTMLInputElement> extends DefaultProps {
  disabled?: InputHTMLAttributes<T>['disabled']
  invalid?: boolean
  required?: InputHTMLAttributes<T>['required']
  readOnly?: InputHTMLAttributes<T>['readOnly']
  indeterminate?: boolean
  defaultChecked?: boolean

  checked?: boolean
  id?: string
  name?: string
  value?: string | number
  color?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  'aria-label'?: string
  'aria-describedby'?: string
  'aria-labelledby'?: string
  children?: ReactNode
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export type CheckboxProps = ICheckboxProps &
  React.HTMLAttributes<HTMLInputElement>

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      id,
      name,
      value,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedby,
      color = 'primary',
      defaultChecked,
      checked,
      size = 'md',
      onChange,
      indeterminate,
      children,
      className,
      ...rest
    } = props
    const { disabled, invalid, readOnly } = useFormControl(props)
    const checkboxClasses = useCheckboxClass({
      size,
      disabled
    })
    const checkboxLabelClasses = useCheckboxLabelClass({ size })
    const ownRef = useRef<HTMLInputElement | null>(null)
    const _ref = useForkRef(ownRef, ref)
    useEffect(() => {
      // @ts-ignore
      if (_ref.current) {
        // @ts-ignore
        _ref.current.indeterminate = Boolean(indeterminate)
      }
    }, [indeterminate, _ref])

    return (
      <label
        className={cx(
          'inline-flex align-top items-center cursor-base',
          disabled && 'cursor-not-allowed'
        )}
      >
        <input
          type='checkbox'
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedby}
          id={id}
          ref={_ref}
          name={name}
          value={value}
          onChange={readOnly ? undefined : onChange}
          defaultChecked={readOnly ? undefined : defaultChecked}
          checked={
            readOnly ? Boolean(checked) : defaultChecked ? undefined : checked
          }
          disabled={disabled}
          aria-disabled={disabled}
          readOnly={readOnly}
          aria-readonly={readOnly}
          aria-invalid={invalid}
          aria-checked={indeterminate ? 'mixed' : checked}
          data-color={color ? color : undefined}
          className={cx(
            checkboxClasses,
            readOnly || disabled ? 'opacity-80' : 'opacity-100',
            className
          )}
          {...rest}
        />
        {children && (
          <span
            className={cx(
              checkboxLabelClasses,
              readOnly || disabled ? 'opacity-40' : 'opacity-100'
            )}
          >
            {children}
          </span>
        )}
      </label>
    )
  }
)

if (__IS_DEV__) {
  Checkbox.displayName = 'Checkbox'
}
