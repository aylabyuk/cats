import React from 'react'
import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import BreedSelect, { BreedSelectProps } from '.'

const meta: Meta = {
  title: 'Base/Breed Select',
  component: BreedSelect,
}

const Template: Story<BreedSelectProps> = (args) => <BreedSelect {...args} />

export const SandBox = Template.bind({})
SandBox.args = {
  breeds: [
    { name: 'Abyssinian', id: 'abys' },
    { name: 'Aegean', id: 'aege' },
    { name: 'American Bobtail', id: 'abob' },
    { name: 'American Curl', id: 'acur' },
    { name: 'American Shorthair', id: 'asho' },
  ],
} as BreedSelectProps

export default meta
