import { memo, MemoExoticComponent } from 'react'
import flush from 'styled-jsx/server'
import flushToReact from 'styled-jsx/server'

import type { UiProviderProps } from './types'
import { baseStyle } from '../themes'

function ReactUiProvider({ children }: UiProviderProps) {
  return (
    <>
      <style global jsx>
        {`
          ${baseStyle}
        `}
      </style>
      {children}
    </>
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
