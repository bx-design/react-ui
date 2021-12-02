import { forwardRef, Fragment, HTMLAttributes, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { DefaultProps, cx, __IS_DEV__ } from '@bx-design/react-ui-utils'
import { useModalClass } from './styles'
import { ModalProvider } from '../context'
import { ModalBackdrop } from '../modal-backdrop'

interface IModalProps extends DefaultProps {
  isOpen: boolean
  toggleModal: (to: boolean) => void
  scrollable?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  transparent?: boolean
  centered?: boolean
  backdrop?: boolean | 'static'
  keyboard?: boolean
  children?: ReactNode
}

export interface ModalProps
  extends HTMLAttributes<HTMLDivElement>,
    IModalProps {}

export const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    isOpen,
    toggleModal,
    scrollable,
    size,
    transparent,
    centered,
    backdrop,
    keyboard,
    children,
    className,
    ...rest
  } = props
  const classes = useModalClass({ size, scrollable, centered, transparent })
  const providerProps = {
    isOpen,
    toggleModal,
    scrollable,
    size,
    transparent,
    centered,
    backdrop,
    keyboard
  }

  const onClose = () => {
    if (backdrop === 'static' || backdrop === false) return
    toggleModal(false)
  }

  return (
    <ModalProvider {...providerProps}>
      <Transition.Root appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='modal-dialog' onClose={onClose}>
          <div className='modal-back'>
            <ModalBackdrop />
            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <div className={cx(classes, className)} {...rest} ref={ref}>
                {children}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </ModalProvider>
  )
})

if (__IS_DEV__) {
  Modal.displayName = 'Modal'
}
