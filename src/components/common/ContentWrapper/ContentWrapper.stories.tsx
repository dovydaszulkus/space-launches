import { ComponentStory, ComponentMeta } from '@storybook/react'

import ContentWrapper from './ContentWrapper'

export default {
  title: 'ContentWrapper',
  component: ContentWrapper,
  argTypes: {},
} as ComponentMeta<typeof ContentWrapper>

const Template: ComponentStory<typeof ContentWrapper> = (args) => (
  <ContentWrapper {...args}>
    <h2 style={{ color: 'white', padding: '40px', textAlign: 'left' }}>
      Any content goes here
    </h2>
  </ContentWrapper>
)

export const Default = Template.bind({})
Default.args = {
  variant: 'primary',
}

export const ContentCentered = Template.bind({})
ContentCentered.args = {
  center: true,
  variant: 'primary',
}
