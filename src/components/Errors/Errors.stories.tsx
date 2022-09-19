import { ComponentStory, ComponentMeta } from '@storybook/react'

import Errors from './Errors'

export default {
  title: 'Errors',
  component: Errors,
  argTypes: {},
} as ComponentMeta<typeof Errors>

const Template: ComponentStory<typeof Errors> = (args) => (
  <div style={{ backgroundColor: 'grey' }}>
    <Errors />
  </div>
)

export const Default = Template.bind({})
