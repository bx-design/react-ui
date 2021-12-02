import {
  createContext,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useContext
} from 'react'
import { useId } from '@reach/auto-id'
import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'

interface UseFormControlProps {
  required?: boolean
  disabled?: boolean
  invalid?: boolean
  readOnly?: boolean
  id?: string
}

interface UseFormControlData extends UseFormControlProps {
  labelId?: string
  errorId?: string
  helpTextId?: string
}

interface IFormControlProps extends DefaultProps, UseFormControlProps {
  children?: ReactNode
}

export interface FormControlProps
  extends HTMLAttributes<HTMLDivElement>,
    IFormControlProps {}

export interface FormControlContext extends UseFormControlProps {}

const FormControlContext = createContext<FormControlContext | undefined>(
  undefined
)

export function useFormControl(props: UseFormControlProps): UseFormControlData {
  const context = useContext(FormControlContext)
  if (!context) {
    return props
  }
  return context
}

export const FormControl = forwardRef<HTMLDivElement, FormControlProps>(
  (props, ref) => {
    const hookId = useId()
    const {
      children,
      className,
      required,
      disabled,
      invalid,
      readOnly,
      id: idProp,
      ...rest
    } = props
    const classes = cx('form-control', className)

    const id = idProp || `field-${hookId}`

    const labelId = `${id}-label`
    const errorId = `${id}-error`
    const helpTextId = `${id}-helptext`

    const context = {
      required,
      disabled,
      invalid,
      readOnly,
      id,
      labelId,
      errorId,
      helpTextId
    }

    return (
      <FormControlContext.Provider value={context}>
        <div role='group' ref={ref} className={classes} {...rest}>
          {children}
        </div>
      </FormControlContext.Provider>
    )
  }
)

if (__IS_DEV__) {
  FormControl.displayName = 'FormGroup'
}
