import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import PageLayout from './PageLayout'

export default {
  title: 'PageLayout',
  component: PageLayout,
  decorators: [withRouter],
  argTypes: {
    headingText: {
      name: 'Heading text',
      defaultValue: 'Upcoming: SXM-8',
      control: {
        type: 'text',
      },
    },
    pageBackgroundVariant: {
      name: 'Page background variant',
      defaultValue: 'primary',
      control: {
        type: 'radio',
      },
    },
    contentBackgroundVariant: {
      name: 'Content background variant',
      defaultValue: 'primary',
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof PageLayout>

const Template: ComponentStory<typeof PageLayout> = (args) => (
  <PageLayout {...args}>
    <h2 style={{ textAlign: 'center', padding: '20px 0', color: 'white' }}>
      Your content
    </h2>
  </PageLayout>
)

export const Default = Template.bind({})
