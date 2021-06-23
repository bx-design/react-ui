import { memo, MemoExoticComponent } from 'react'
import flush from 'styled-jsx/server'
import flushToReact from 'styled-jsx/server'

import type { UiProviderProps } from './types'
import themes from '../themes'

function BxReactUiProvider({ children }: UiProviderProps) {
  return (
    <>
      <style global jsx>
        {`
          ${themes.baseStyle}
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
const MemoProvider = memo(BxReactUiProvider) as MemoProviderType

MemoProvider.flush = flush

export default MemoProvider
