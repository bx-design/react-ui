import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '../src'

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const PrimarySolid = Template.bind({})
PrimarySolid.args = {
  variant: 'solid',
  colorVariant: 'primary',
  children: 'Button'
}

export const Solid = () => (
  <div className='flex space-x-2'>
    <Button variant='solid'>Button</Button>
    <Button variant='solid' colorVariant='primary'>
      Button Primary
    </Button>
    <Button variant='solid' colorVariant='secondary'>
      Button Secondary
    </Button>
    <Button variant='solid' colorVariant='lorange'>
      Button Light Orange
    </Button>
    <Button variant='solid' colorVariant='lblue'>
      Button Light Blue
    </Button>
  </div>
)

export const Outline = () => (
  <div className='flex space-x-2'>
    <Button variant='outline'>Button</Button>
    <Button variant='outline' colorVariant='primary'>
      Button Primary
    </Button>
    <Button variant='outline' colorVariant='secondary'>
      Button Secondary
    </Button>
    <Button variant='outline' colorVariant='lorange'>
      Button Light Orange
    </Button>
    <Button variant='outline' colorVariant='lblue'>
      Button Light Blue
    </Button>
  </div>
)
