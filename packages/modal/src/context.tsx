import { createContext, ReactNode, useContext } from 'react'

interface UseModalProps {
  isOpen: boolean
  toggleModal: (to: boolean) => void
  scrollable?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  transparent?: boolean
  centered?: boolean
  backdrop?: boolean | 'static'
  keyboard?: boolean
}

interface ModalChildren {
  children: ReactNode
}

export interface ModalContext extends UseModalProps {}

const ModalContext = createContext<ModalContext | undefined>(undefined)

export function useModal(): UseModalProps {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}

export function ModalProvider(props: UseModalProps & ModalChildren) {
  return (
    <ModalContext.Provider value={props}>
      {props.children}
    </ModalContext.Provider>
  )
}
