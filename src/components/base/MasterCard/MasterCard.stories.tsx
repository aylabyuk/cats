import React from 'react'
import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import MasterCard, { MasterCardProps } from '.'

const meta: Meta = {
  title: 'Base/Master Card',
  component: MasterCard,
}

const Template: Story<MasterCardProps> = (args) => (
  <div style={{ width: 238 }}>
    <MasterCard {...args} />
  </div>
)

export const SandBox = Template.bind({})
SandBox.args = {
  catId: 'awesomeCatID1234',
  imageUrl: 'https://cdn2.thecatapi.com/images/bTo6m3PVg.jpg',
} as MasterCardProps

export default meta
