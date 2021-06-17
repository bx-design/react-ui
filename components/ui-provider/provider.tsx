import { Context, createContext } from 'react'

import type { UiProviderContext, UiProviderProps } from './types'
import themes from 'components/themes'
import '@bx-design/bx-fonts'

const BxReactUiContext: Context<UiProviderContext> =
  createContext<UiProviderContext>(null)

function BxReactUiProvider({ children }: UiProviderProps) {
  return (
    <BxReactUiContext.Provider value={null}>
      <style jsx>{themes.baseCss}</style>
      {children}
    </BxReactUiContext.Provider>
  )
}

export default BxReactUiProvider
