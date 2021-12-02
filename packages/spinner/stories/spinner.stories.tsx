import { Spinner } from '../src'

export default {
  title: 'Spinner',
  component: Spinner,
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

export const basic = () => (
  <div className='flex space-x-2'>
    <Spinner />
    <Spinner className='text-bx-blue' />
    <Spinner className='text-bx-red-alert' />
    <Spinner className='text-bx-green-future' />
    <Spinner className='text-bx-yellow-alert' />
  </div>
)

export const size = () => (
  <div className='flex space-x-2'>
    <Spinner size='xs' />
    <Spinner size='sm' />
    <Spinner size='md' />
    <Spinner size='lg' />
    <Spinner size='xl' />
  </div>
)
