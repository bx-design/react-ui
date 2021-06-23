import { memo, MemoExoticComponent, createContext } from 'react'
import flush from 'styled-jsx/server'
import flushToReact from 'styled-jsx/server'

import type { UiProviderContext, UiProviderProps } from './types'
import { baseStyle } from '../themes'

const BxReactUiContext = createContext<UiProviderContext>(null)

function ReactUiProvider({ children }: UiProviderProps) {
  return (
    <BxReactUiContext.Provider value={null}>
      <style global jsx>
        {`
          ${baseStyle}
        `}
      </style>
      {children}
    </BxReactUiContext.Provider>
  )
}

type MemoProviderType = MemoExoticComponent<
  ({ children }: UiProviderProps) => JSX.Element
> & {
  flush: typeof flushToReact
}
const BxReactUiProvider = memo(ReactUiProvider) as MemoProviderType

BxReactUiProvider.flush = flush

export default BxReactUiProvider
