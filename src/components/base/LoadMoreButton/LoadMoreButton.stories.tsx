import React from 'react'
import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
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
  onClick: action('onClick'),
} as LoadMoreButtonProps

export default meta
