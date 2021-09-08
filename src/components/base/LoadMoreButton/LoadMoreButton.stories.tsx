import { Meta, Story } from '@storybook/react'
import LoadMoreButton, { LoadMoreButtonProps } from '.'

const meta: Meta = {
  title: 'Base/LoadMore Button',
  component: LoadMoreButton,
}

const Template: Story<LoadMoreButtonProps> = (args) => (
  <LoadMoreButton {...args} />
)

export const SandBox = Template.bind({})
SandBox.args = {
  loading: false,
} as LoadMoreButtonProps

export default meta
