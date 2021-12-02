import { ForwardRefExoticComponent, RefAttributes } from 'react'

import { Modal as InternalModal, ModalProps } from './modal'
import { ModalBody, ModalBodyProps } from '../modal-body'
import { ModalHeader, ModalHeaderProps } from '../modal-header'
import { ModalFooter, ModalFooterProps } from '../modal-footer'

interface Modal
  extends ForwardRefExoticComponent<
    ModalProps & RefAttributes<HTMLDivElement>
  > {
  Body: typeof ModalBody
  Header: typeof ModalHeader
  Footer: typeof ModalFooter
}

const Modal = InternalModal as Modal

Modal.Body = ModalBody
Modal.Header = ModalHeader
Modal.Footer = ModalFooter

export type { ModalProps, ModalBodyProps, ModalHeaderProps, ModalFooterProps }

export { Modal }
