import { ComponentStory, ComponentMeta } from '@storybook/react'

import Loader from './Loader'

export default {
  title: 'Loader',
  component: Loader,
  argTypes: {},
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Default = Template.bind({})
