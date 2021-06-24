import React from 'react'
import { render, screen } from '@testing-library/react'

import BxReactUiProvider from '../provider'

describe('<BxReactUiProvider /> Component', () => {
  test('Should render component correctly', () => {
    render(
      <div>
        <BxReactUiProvider>
          <h1>Bx React Ui Provider</h1>
        </BxReactUiProvider>
      </div>,
    )
    expect(screen.getByText('Bx React Ui Provider')).toHaveTextContent(
      'Bx React Ui Provider',
    )
  })
  test('Render toMatchSnapshot', () => {
    const html = render(
      <div>
        <BxReactUiProvider>
          <h1>Bx React Ui Provider</h1>
        </BxReactUiProvider>
      </div>,
    )
    expect(html).toMatchSnapshot()
  })
})
