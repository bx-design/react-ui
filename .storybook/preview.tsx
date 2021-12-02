import { withPerformance } from 'storybook-addon-performance'
import './styles.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

const withVechai = (StoryFn: Function) => {
  return (
    <div className='space-y-4 min-h-screen' id='story-wrapper'>
      <StoryFn />
    </div>
  )
}

export const decorators = [withVechai, withPerformance]
