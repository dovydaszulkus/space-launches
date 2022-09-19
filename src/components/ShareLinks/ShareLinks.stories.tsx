import { ComponentStory, ComponentMeta } from '@storybook/react'

import ShareLinks from './ShareLinks'

export default {
  title: 'ShareLinks',
  component: ShareLinks,
  argTypes: {},
} as ComponentMeta<typeof ShareLinks>

const Template: ComponentStory<typeof ShareLinks> = (args) => (
  <div style={{ backgroundColor: 'grey' }}>
    <ShareLinks emailSubject="Hello World" twitterMessage="Hello World" />
  </div>
)

export const Default = Template.bind({})
