import { forwardRef, Fragment, HTMLAttributes } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'
import { useModalBackdropClass } from './styles'
import { useModal } from '../context'

interface IModalBackdropProps extends DefaultProps {}

export interface ModalBackdropProps
  extends HTMLAttributes<HTMLDivElement>,
    IModalBackdropProps {}

export const ModalBackdrop = forwardRef<HTMLDivElement, ModalBackdropProps>(
  (props, ref) => {
    const { className, ...rest } = props
    const { backdrop } = useModal()
    const classes = useModalBackdropClass({ backdrop })

    return (
      <Transition.Child
        as={Fragment}
        enter='ease-out duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <Dialog.Overlay
          ref={ref}
          className={cx(classes, className)}
          {...rest}
        />
      </Transition.Child>
    )
  }
)

if (__IS_DEV__) {
  ModalBackdrop.displayName = 'ModalBackdrop'
}
