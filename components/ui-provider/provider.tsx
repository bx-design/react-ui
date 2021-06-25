import React from 'react'
import flush from 'styled-jsx/server'
import flushToReact from 'styled-jsx/server'

import type { UiProviderProps } from './types'
import { baseStyle, resetStyle, style } from '../themes'

function ReactUiProvider({ children }: UiProviderProps) {
  return (
    <>
      <style global jsx>
        {resetStyle}
      </style>
      <style global jsx>
        {baseStyle}
      </style>
      <style global jsx>
        {style}
      </style>
      {children}
    </>
  )
}

type MemoProviderType = React.MemoExoticComponent<
  ({ children }: UiProviderProps) => JSX.Element
> & {
  flush: typeof flushToReact
}

const BxReactUiProvider = React.memo(ReactUiProvider) as MemoProviderType

BxReactUiProvider.flush = flush

export default BxReactUiProvider
