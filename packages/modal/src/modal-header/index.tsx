import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { BxX } from '@bx-design/react-icons'
import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'

import { useModalHeaderClass } from './styles'
import { useModal } from '../context'

interface IModalHeaderProps extends DefaultProps {
  children?: ReactNode
}

export interface ModalHeaderProps
  extends HTMLAttributes<HTMLDivElement>,
    IModalHeaderProps {}

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  (props, ref) => {
    const { children, className, ...rest } = props
    const classes = useModalHeaderClass()
    const { toggleModal } = useModal()

    return (
      <div ref={ref} className={cx(classes, className)} {...rest}>
        {children}
        <button
          type='button'
          aria-label='cerrar modal'
          onClick={() => toggleModal(false)}
          className='modal-header-button'
        >
          <BxX size='20' />
        </button>
      </div>
    )
  }
)

if (__IS_DEV__) {
  ModalHeader.displayName = 'ModalHeader'
}
