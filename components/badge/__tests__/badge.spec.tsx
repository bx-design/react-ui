import React, { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Badge, { VarianType } from '../badge'

describe('<Badge /> Component', () => {
  test('Render toMatchSnapshot', () => {
    const html = render(<Badge>Badge</Badge>)
    expect(html).toMatchSnapshot()
  })

  test('Should render component correctly', () => {
    render(<Badge>Badge</Badge>)
    const badge = screen.getByTestId('badge')
    expect(badge).toHaveTextContent('Badge')
  })

  test('Should render Component with props', () => {
    render(
      <Badge variant='primary' rounded>
        Badge
      </Badge>,
    )
    const badge = screen.getByTestId('badge')
    expect(badge).toHaveClass('badge')
    expect(badge).toHaveClass('badge-primary')
    expect(badge).toHaveClass('badge-rounded')
  })

  test('Should render Component with changing props', () => {
    function MockApp() {
      const [variant, setVariant] = useState<VarianType>('primary')
      const [rounded, setRounded] = useState(false)

      const handleClick = () => {
        setVariant('success')
      }

      return (
        <div>
          <Badge variant={variant} rounded={rounded}>
            Badge
          </Badge>
          <button onClick={handleClick}>Change Variant</button>
          <button onClick={() => setRounded(true)}>Change Rounded</button>
        </div>
      )
    }
    render(<MockApp />)
    const badge = screen.getByTestId('badge')
    const btnVariant = screen.getByText('Change Variant')
    const btnRounded = screen.getByText('Change Rounded')

    expect(badge).toHaveClass('badge')
    expect(badge).toHaveClass('badge-primary')
    userEvent.click(btnVariant)
    expect(badge).toHaveClass('badge-success')
    expect(badge).not.toHaveClass('badge-primary')
    userEvent.click(btnRounded)
    expect(badge).toHaveClass('badge-rounded')
  })
})
