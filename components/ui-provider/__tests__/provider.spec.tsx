import { render, screen } from '@testing-library/react'

import BxReactUiProvider from '../provider'
describe('<BxReactUiProvider />', () => {
  test('should render correctly', () => {
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
    expect(screen.getByText('Bx React Ui Provider')).toMatchSnapshot()
  })
})
