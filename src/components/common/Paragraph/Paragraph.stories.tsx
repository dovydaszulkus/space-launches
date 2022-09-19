import { ComponentStory, ComponentMeta } from '@storybook/react'

import Paragraph from './Paragraph'

export default {
  title: 'Paragraph',
  component: Paragraph,
  argTypes: {},
} as ComponentMeta<typeof Paragraph>

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <div style={{ backgroundColor: 'grey' }}>
    <Paragraph>Hello storybook</Paragraph>
  </div>
)

export const Default = Template.bind({})
