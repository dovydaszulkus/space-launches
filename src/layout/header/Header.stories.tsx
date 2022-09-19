import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import Header from './Header'

export default {
  title: 'Header',
  component: Header,
  decorators: [withRouter],
  argTypes: {},
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => (
  <div style={{ background: '#1C448E' }}>
    <Header />
  </div>
)

export const Default = Template.bind({})
