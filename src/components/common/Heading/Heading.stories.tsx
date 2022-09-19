import { ComponentStory, ComponentMeta } from '@storybook/react'

import Heading from './Heading'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {},
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => (
  <div style={{ backgroundColor: 'grey' }}>
    <Heading text="A demo heading" />
  </div>
)

export const Default = Template.bind({})
